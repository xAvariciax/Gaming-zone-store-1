import db from '../../../db/index.js';
import { ErrorWithStatus } from '../../../utils/errorTypes.js';

const getAll = async () => {
  const response = await db.query(`SELECT * FROM user_order`);
  return response.rows;
};

const addOne = async (payload) => {
  const response = await db.query(
    `
    INSERT INTO user_order (date, status, user_id, payment_reference, payment_method_id, monto)
    VALUES (NOW(), 'preparacion', $1, $2, $3, $4) RETURNING *
  `,
    [payload.user_id, payload.payment_reference, payload.payment_method_id, payload.monto],
  );
  return response.rows[0];
};

const deleteOneById = async (payload) => {
  const response = await db.query(
    `
    DELETE FROM user_order
    WHERE id = $1 AND user_id = $2  RETURNING *
  `,
    [payload.orderId, payload.userId],
  );
  if (response.rowCount === 0) {
    throw new ErrorWithStatus(404, 'La orden no fue encontrada');
  }
  return response.rows[0];
};

const updateOneById = async (id, payload) => {
  const response = await db.query(
    `
     UPDATE user_order
     SET status = $1
     WHERE id = $2 AND user_id = $3     RETURNING *
   `,
    [payload.status, id, payload.userId],
  );
  if (response.rowCount === 0) {
    throw new ErrorWithStatus(404, 'La orden no fue encontrada');
  }
  return response.rows[0];
};

const getByPaymentStatus = async (status) => {
  const response = await db.query(
    `
     SELECT
      user_order.id,
      user_order.date,
      user_order.payment_reference,
      user_order.payment_method_id,
      user_order.payment_status,
      user_order.monto,
      payment_method.bank AS bank_name,
      users.email AS user_email
    FROM user_order
    JOIN payment_method ON user_order.payment_method_id = payment_method.id
    JOIN users ON user_order.user_id = users.id
    WHERE user_order.payment_status = $1
    ORDER BY user_order.date DESC
  `,
    [status],
  );
  return response.rows;
};

const updatePaymentStatus = async (orderId, newStatus) => {
  const response = await db.query(
    `
    UPDATE user_order
    SET payment_status = $1
    WHERE id = $2
    RETURNING *
  `,
    [newStatus, orderId],
  );
  if (response.rowCount === 0) {
    throw new ErrorWithStatus(404, 'La orden no fue encontrada.');
  }
  return response.rows[0];
};

// Para que un usuario pueda ver todas sus órdenes
const getByUserId = async (userId) => {
  const response = await db.query(
    `
    SELECT
      id,
      date,
      status,
      payment_status,
      payment_reference,
      monto
    FROM user_order
    WHERE user_id = $1
    ORDER BY date DESC
  `,
    [userId],
  );
  return response.rows;
};

const orderRepository = {
  getAll,
  addOne,
  deleteOneById,
  updateOneById,
  getByPaymentStatus,
  updatePaymentStatus,
  getByUserId,
};

export default orderRepository;
