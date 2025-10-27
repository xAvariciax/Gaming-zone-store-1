import db from '../../db/index.js';
import { ErrorWithStatus } from '../../utils/errorTypes.js';

// const user.isAdmin = (user) => {
//   user.administrator === true;
// }

const addOne = async (payload) => {
  const response = await db.query(
    `
    INSERT INTO users (email, passwordHash, administrator)
    VALUES ($1, $2, $3) RETURNING *
  `,
    [payload.email, payload.passwordHash, payload.administrator],
  );
  return response.rows[0];
};

const verifyOne = async (payload) => {
  const response = await db.query(
    `
    UPDATE users
    SET verify_email = true
    WHERE id = $1
    RETURNING *
  `,
    [payload.id],
  );
  if (response.rowCount === 0) {
    throw new ErrorWithStatus(400, 'Token malformado');
  }
  return response.rows[0];
};

const findByEmail = async (payload) => {
  const response = await db.query(
    `
    SELECT * FROM users
    WHERE email = $1
  `,
    [payload.email],
  );

  return response.rows[0];
};

const findById = async (id) => {
  const response = await db.query(
    `
    SELECT id, email, verify_email, Administrator FROM users
    WHERE id = $1
  `,
    [id],
  );
  return response.rows[0];
};

const usersRepository = { addOne, verifyOne, findByEmail, findById };

export default usersRepository;
