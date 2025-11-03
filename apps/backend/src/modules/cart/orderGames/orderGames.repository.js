import db from '../../../db/index.js';
import { ErrorWithStatus } from '../../../utils/errorTypes.js';

const getOrderGames = async (orderId) => {
  const response = await db.query(
    `
    SELECT
      op.id,
      op.order_id,
      op.game_id,
      op.quantity,
      p.name AS game_name,
      p.price AS game_price
    FROM
      order_games AS op
    JOIN
      games AS p ON op.game_id = p.id
    WHERE
      op.order_id = $1
  `,
    [orderId],
  );
  return response.rows;
};

const addGameToOrder = async (payload) => {
  // Verificar si el producto ya existe en la orden
  const checkResponse = await db.query(
    `
    SELECT * FROM order_games WHERE order_Id = $1 AND game_id = $2
    `,
    [payload.orderId, payload.gameId],
  );

  const existingGame = checkResponse.rows[0];

  if (existingGame) {
    // Si el Game ya existe, actualizar cantidad
    const newQuantity = existingGame.quantity + payload.quantity;
    const updateResponse = await db.query(
      `
      UPDATE order_games
      SET quantity = $1
      WHERE order_Id = $2 AND game_id = $3
      RETURNING *
      `,
      [newQuantity, payload.orderId, payload.gameId],
    );
    return updateResponse.rows[0];
  } else {
    // Si el game no existe, insertar como nuevo
    const insertResponse = await db.query(
      `
      INSERT INTO order_games (order_Id, game_id, quantity)
      VALUES ($1, $2, $3) 
      RETURNING *
      `,
      [payload.orderId, payload.gameId, payload.quantity],
    );
    return insertResponse.rows[0];
  }
};

const removeGameFromOrder = async (payload) => {
  const response = await db.query(
    `
    DELETE FROM order_games
    WHERE order_id = $1 AND game_id = $2 RETURNING *
  `,
    [payload.orderId, payload.gameId],
  );
  if (response.rowCount === 0) {
    throw new ErrorWithStatus(404, 'El game no fue encontrado en la orden');
  }
  return response.rows[0];
};

const updateGameQuantity = async (payload) => {
  const response = await db.query(
    `
    UPDATE order_games
    SET quantity = $1
    WHERE order_id = $2 AND game_id = $3 RETURNING *
  `,
    [payload.newQuantity, payload.orderId, payload.gameId],
  );
  if (response.rowCount === 0) {
    throw new ErrorWithStatus(404, 'El game no fue encontrado en la orden');
  }
  return response.rows[0];
};

export default {
  addGameToOrder,
  getOrderGames,
  removeGameFromOrder,
  updateGameQuantity,
};
