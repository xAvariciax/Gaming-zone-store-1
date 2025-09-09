import db from '../../db/index.js';
import { ErrorWithStatus } from '../../utils/errorTypes.js';

const getAll = async () => {
  const response = await db.query('SELECT * FROM games');
  return response.rows;
};

const addOne = async (payload) => {
  const response = await db.query(
    `
    INSERT INTO games (name, description, quanty)
    VALUES ($1, $2, $3) RETURNING *
  `,
    [payload.name, payload.quanty, payload.description],
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
    SET name = $1, quanty = $2
    WHERE id = $3
    RETURNING *
  `,
    [payload.name, payload.quanty, id],
  );
  if (response.rowCount === 0) {
    throw new ErrorWithStatus(404, 'El Juego fue no encontrado');
  }
  return response.rows[0];
};

const gamesRepository = { getAll, addOne, deleteOneById, updateOneById };

export default gamesRepository;
