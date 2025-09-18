import db from '../../db/index.js';
import { ErrorWithStatus } from '../../utils/errorTypes.js';


const addPayment = async (payload) => {
  let cuotaId = payload.cuota_id;
  if (!cuotaId) {
    // Buscar la primera cuota del usuario con remaining > 0
    // Obtener el número de casa del usuario
    const userRes = await db.query('SELECT house_number FROM users WHERE id = $1', [payload.userId]);
    if (userRes.rowCount === 0) {
      throw new ErrorWithStatus(404, 'Usuario no encontrado');
    }
    const houseNumber = userRes.rows[0].house_number;

    // Buscar la primera cuota de la casa del usuario con remaining > 0
    const cuotaRes = await db.query(
      `SELECT id FROM cuotas WHERE remaining > 0 AND house_number = $1 ORDER BY date ASC LIMIT 1`,
      [houseNumber]
    );
    if (cuotaRes.rows.length === 0) {
      throw new ErrorWithStatus(400, 'No hay cuotas disponibles para asignar');
    }
    cuotaId = cuotaRes.rows[0].id;
  }
  const response = await db.query(
    `
    INSERT INTO payment (date, payment_reference, user_id, cuota_id, payment_methods_id, monto)
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING *
  `,
    [payload.date, payload.payment_reference, payload.userId, cuotaId, payload.payment_methods_id,payload.monto]
  );
  return response.rows[0];
};

const getAllByUser = async (userId) => {
  const response = await db.query(
    `
    SELECT * FROM payment
    WHERE user_id = $1
    ORDER BY date DESC
  `,
    [userId]
  );
  return response.rows;
};

const getById = async (id, userId) => {
  const response = await db.query(
    `
    SELECT * FROM payment
    WHERE id = $1 AND user_id = $2
  `,
    [id, userId]
  );
  return response.rows[0];
};

const updatePayment = async (id, userId, payload) => {
  const response = await db.query(
    `
    UPDATE payment
    SET date = $1, payment_reference = $2
    WHERE id = $3 AND user_id = $4
    RETURNING *
  `,
    [payload.date, payload.payment_reference, id, userId]
  );
  if (response.rowCount === 0) {
    throw new ErrorWithStatus(404, 'Pago no encontrado');
  }
  return response.rows[0];
};

const deletePayment = async (id, userId) => {
  const response = await db.query(
    `
    DELETE FROM payment
    WHERE id = $1 AND user_id = $2
    RETURNING *
  `,
    [id, userId]
  );
  if (response.rowCount === 0) {
    throw new ErrorWithStatus(404, 'Pago no encontrado');
  }
  return response.rows[0];
};


const updatePaymentStatus = async (id, status) => {
  // Get payment info
  const paymentRes = await db.query(
    `SELECT * FROM payment WHERE id = $1`,
    [id]
  );
  if (paymentRes.rowCount === 0) {
    throw new ErrorWithStatus(404, 'Pago no encontrado');
  }
  const payment = paymentRes.rows[0];
  if (status === 'accepted') {
    // Get cuota info
    const cuotaRes = await db.query(
      `SELECT * FROM cuotas WHERE id = $1`,
      [payment.cuota_id]
    );
    if (cuotaRes.rowCount === 0) {
      throw new ErrorWithStatus(404, 'Cuota no encontrada');
    }
    let cuota = cuotaRes.rows[0];
    let paymentAmount = parseFloat(payment.monto);
    let remaining = parseFloat(cuota.remaining);
    let userId = payment.user_id;
    if (paymentAmount < remaining) {
      // Partial payment: reduce remaining, do not mark cuota as paid
      remaining -= paymentAmount;
      await db.query(
        `UPDATE cuotas SET remaining = $1 WHERE id = $2`,
        [remaining, cuota.id]
      );
    } else {
      // Payment covers cuota and possibly more
      let excess = paymentAmount - remaining;
      remaining = 0;

      const userRes = await db.query('SELECT house_number FROM users WHERE id = $1', [userId]);
      if (userRes.rowCount === 0) {
        throw new ErrorWithStatus(404, 'Usuario no encontrado para la cuota');
      }
      const houseNumber = userRes.rows[0].house_number;

      await db.query(
        `UPDATE cuotas SET remaining = $1 WHERE id = $2`,
        [remaining, cuota.id]
      );
      // Apply excess to next cuotas or user balance
      let nextCuotaRes = await db.query(
        `SELECT * FROM cuotas WHERE remaining > 0 AND house_number = $1 ORDER BY date ASC LIMIT 1`,
        [houseNumber]
      );
      if (nextCuotaRes.rowCount > 0) {
        let nextCuota = nextCuotaRes.rows[0];
        let nextRemaining = parseFloat(nextCuota.remaining);
        if (excess < nextRemaining) {
          nextRemaining -= excess;
          excess = 0;
        } else {
          excess -= nextRemaining;
          nextRemaining = 0;
        }
        await db.query(
          `UPDATE cuotas SET remaining = $1 WHERE id = $2`,
          [nextRemaining, nextCuota.id]
        );
      }
      if (excess > 0) {
        // Update user balance negative (overpayment)
        const userBalanceRes = await db.query(
          `SELECT balance FROM users WHERE id = $1`,
          [userId]
        );
        let userBalance = parseFloat(userBalanceRes.rows[0].balance);
        userBalance -= excess;
        await db.query(
          `UPDATE users SET balance = $1 WHERE id = $2`,
          [userBalance, userId]
        );
      }
    }
  }
  // Update payment status
  const response = await db.query(
    `
    UPDATE payment
    SET status = $1
    WHERE id = $2
    RETURNING *
  `,
    [status, id]
  );
  return response.rows[0];
};

const getAllByHouse = async (houseNumber) => {
  const response = await db.query(
    `
    SELECT p.* FROM payment p
    JOIN users u ON p.user_id = u.id
    WHERE u.house_number = $1
    ORDER BY p.date DESC
  `,
    [houseNumber]
  );
  return response.rows;
};



const paymentRepository = {
  addPayment,
  getAllByUser,
  getById,
  updatePayment,
  deletePayment,
  updatePaymentStatus,
  getAllByHouse
};

export default paymentRepository;
