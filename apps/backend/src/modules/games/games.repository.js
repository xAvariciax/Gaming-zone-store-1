// import { number } from 'zod';
import db from '../../db/index.js';
import { ErrorWithStatus } from '../../utils/errorTypes.js';

const getAll = async () => {
  const response = await db.query('SELECT * FROM games');
  return response.rows;
};

const addOne = async (payload) => {
  const response = await db.query(
    `
    INSERT INTO games (name, description, quantity, url, price, console)
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING *
  `,
    [
      payload.name,
      payload.description,
      payload.quantity,
      payload.url,
      payload.price,
      payload.console,
    ],
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
    SET name = $1, quantity = $2, console = $3, price = $4, url = $5, description = $6
    WHERE id = $7 
    RETURNING *
  `,
    [
      payload.name,
      payload.quantity,
      payload.console,
      payload.price,
      payload.url,
      payload.description,
      id,
    ],
  );
  if (response.rowCount === 0) {
    throw new ErrorWithStatus(404, 'El Juego fue no encontrado');
  }
  return response.rows[0];
};

const gamesRepository = { getAll, addOne, deleteOneById, updateOneById };

export default gamesRepository;
