import express from 'express';
import gamesRepository from './games.repository.js';
import {
  creategamesRouteSchema,
  deletegamesRouteSchema,
  updategamesRouteSchema,
} from './games.routes.schemas.js';
const gamesRouter = express.Router();

gamesRouter.get('/', async (req, res) => {
  const games = await gamesRepository.getAll();
  res.json(games);
});

gamesRouter.post('/', async (req, res) => {
  console.log(1);

  const body = creategamesRouteSchema.body.parse(req.body);
  console.log(2);
  const newgames = await gamesRepository.addOne(body);
  console.log(3);
  res.json(newgames);
});

gamesRouter.delete('/:id', async (req, res, next) => {
  try {
    const params = deletegamesRouteSchema.params.parse(req.params);
    console.log('PARAMS', params);

    const idToDelete = Number(params.id);
    // 2. La función ahora recibe solo el ID, no el objeto { gameId: id }
    const gamesDeleted = await gamesRepository.deleteOneById(idToDelete);

    console.log('games ELIMINADO', gamesDeleted);
    res.json(gamesDeleted);
  } catch (error) {
    next(error);
  }
});

// En games.routes.js, en la ruta PUT /:id

gamesRouter.put('/:id', async (req, res, next) => {
  try {
    // 1. Validar el cuerpo (el payload)
    const body = updategamesRouteSchema.body.parse(req.body);

    const gameId = Number(req.params.id);
    // 3. Llamar al repositorio con el ID como número y el payload
    const gamesUpdated = await gamesRepository.updateOneById(gameId, {
      ...body,
    });

    res.json(gamesUpdated);
  } catch (error) {
    next(error);
  }
});

export default gamesRouter;
