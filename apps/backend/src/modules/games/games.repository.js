import db from '../../db/index.js';
import { ErrorWithStatus } from '../../utils/errorTypes.js';

const getAll = async () => {
  const response = await db.query('SELECT * FROM games');
  return response.rows;
};

const addOne = async (payload) => {
  const response = await db.query(
    `
    INSERT INTO games (name, description, quantity, url)
    VALUES ($1, $2, $3, $4) RETURNING *
  `,
    [payload.name, payload.description, payload.quantity, payload.url],
  );
  return response.rows[0];
};

const deleteOneById = async (id) => {
  const response = await db.query(
    `
    DELETE FROM games
    WHERE id = $1 RETURNING *
  `,
    [id],
  );
  if (response.rowCount === 0) {
    throw new ErrorWithStatus(404, 'El Juego fue no encontrado');
  }
  return response.rows[0];
};

const updateOneById = async (id, payload) => {
  const response = await db.query(
    `
    UPDATE games
    SET name = $1, quantity = $2
    WHERE id = $3
    RETURNING *
  `,
    [payload.name, payload.quantity, id],
  );
  if (response.rowCount === 0) {
    throw new ErrorWithStatus(404, 'El Juego fue no encontrado');
  }
  return response.rows[0];
};

const gamesRepository = { getAll, addOne, deleteOneById, updateOneById };

export default gamesRepository;
