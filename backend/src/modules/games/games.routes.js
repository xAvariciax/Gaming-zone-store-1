import express from 'express';
import gamesRepository from './games.repository.js';
import {
  creategamesRouteSchema,
  deletegamesRouteSchema,
  updategamesRouteSchema,
} from './games.routes.schemas.js';
const gamesRouter = express.Router();

gamesRouter.get('/consoles', async (req, res) => {
  const games = await gamesRepository.getAll();
  res.json(games);
});

gamesRouter.post('/consoles', async (req, res) => {
  const body = creategamesRouteSchema.body.parse(req.body);
  const newgames = await gamesRepository.addOne(body);
  res.json(newgames);
});

gamesRouter.delete('/consoles/', async (req, res) => {
  const params = deletegamesRouteSchema.params.parse(req.params);
  console.log('PARAMS', params);
  const gamesDeleted = await gamesRepository.deleteOneById(params.id);
  console.log('games ELIMINADO', gamesDeleted);

  res.json(gamesDeleted);
});

gamesRouter.put('/consoles/p', async (req, res) => {
  const body = updategamesRouteSchema.body.parse(req.body);
  const params = updategamesRouteSchema.params.parse(req.params);
  const gamesUpdated = await gamesRepository.updateOneById(params.id, body);
  res.json(gamesUpdated);
});

export default gamesRouter;
