import express from 'express';
import orderGamesRepository from './orderGames.repository.js';
import {
  addGameToOrderSchema,
  updateGameQuantitySchema,
  deleteGameFromOrderSchema,
} from './orderGames.routes.schemas.js';

const orderGamesRouter = express.Router();

orderGamesRouter.post('/:orderId', async (req, res) => {
  const { orderId } = addGameToOrderSchema.params.parse(req.params);
  const { gameId, quantity } = addGameToOrderSchema.body.parse(req.body);
  const newGame = await orderGamesRepository.addGameToOrder({
    orderId,
    gameId,
    quantity,
  });
  res.json(newGame);
});

orderGamesRouter.get('/:orderId', async (req, res) => {
  const { orderId } = addGameToOrderSchema.params.parse(req.params);
  const gamesInOrder = await orderGamesRepository.getOrderGames(orderId);
  res.json(gamesInOrder);
});

orderGamesRouter.put('/:orderId/:gameId', async (req, res) => {
  const { orderId, gameId } = updateGameQuantitySchema.params.parse(req.params);
  const { newQuantity } = updateGameQuantitySchema.body.parse(req.body);
  const updatedGame = await orderGamesRepository.updateGameQuantity({
    orderId,
    gameId,
    newQuantity,
  });
  res.json(updatedGame);
});

orderGamesRouter.delete('/:orderId/:GameId', async (req, res) => {
  const { orderId, gameId } = deleteGameFromOrderSchema.params.parse(req.params);
  const deletedGame = await orderGamesRepository.removeGameFromOrder({
    orderId,
    gameId,
  });
  res.json(deletedGame);
});

export default orderGamesRouter;
