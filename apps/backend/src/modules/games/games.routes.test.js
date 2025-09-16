import { beforeEach, describe, expect, it, vi } from 'vitest';
import request from 'supertest';
import app from '../../../app.js';
import { ErrorWithStatus } from '../../utils/errorTypes.js';

const mocks = vi.hoisted(() => {
  return {
    gamesRepository: {
      getAll: vi.fn(),
      addOne: vi.fn(),
      deleteOneById: vi.fn(),
      updateOneById: vi.fn(),
    },
  };
});

vi.mock('./games.repository.js', () => ({ default: mocks.gamesRepository }));

const games = [{ id: 123, name: 'Elden ring', quantity: '3' }];

describe('Cuando se intenta obtener los juegos', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('debe devolver los juegos cuando todo esta correcto', async () => {
    mocks.gamesRepository.getAll.mockResolvedValue(games);
    const response = await request(app).get('/games');
    expect(mocks.gamesRepository.getAll).toHaveBeenCalledTimes(1);
    expect(response.statusCode).toBe(200);
    expect(response.body).length(1);
  });
});

describe('Cuando se intenta agregar un juego', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('debe devolver el juego agregado cuando la validacio es correcta', async () => {
    const newgamestructure = { name: 'Elden ring', quantity: '3' };
    const expectedgamestructure = { ...newgamestructure, id: 678 };
    mocks.gamesRepository.addOne.mockResolvedValue(expectedgamestructure);
    const response = await request(app).post('/games').send(newgamestructure);
    expect(mocks.gamesRepository.addOne).toHaveBeenCalledTimes(1);
    expect(mocks.gamesRepository.addOne).toBeCalledWith(newgamestructure);
    expect(response.statusCode).toBe(200);
    expect(response.body).toStrictEqual(expectedgamestructure);
  });
  it('debe devolver un error describiendo las causas de porque la validacion fallo', async () => {
    const newgamestructure = { name: 'Elden ring', quantity: '3' };
    const response = await request(app).post('/games').send(newgamestructure);
    expect(response.statusCode).toBe(400);
    expect(response.body).toStrictEqual({ error: 'El nombre no es valido.' });
  });
});

describe('Cuando se intenta eliminar un juego', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('debe devolver el juego eliminado cuando todo es correcto', async () => {
    const expectedgamestructure = games[0];
    mocks.gamesRepository.deleteOneById.mockResolvedValue(expectedgamestructure);
    const response = await request(app).delete('/games/123');
    expect(mocks.gamesRepository.deleteOneById).toHaveBeenCalledTimes(1);
    expect(mocks.gamesRepository.deleteOneById).toBeCalledWith(games[0].id);
    expect(response.statusCode).toBe(200);
    expect(response.body).toStrictEqual(expectedgamestructure);
  });
  it('debe devolver un error cuando el id no es un numero', async () => {
    const response = await request(app).delete('/games/ifhsifj');
    expect(response.statusCode).toBe(400);
    expect(response.body).toStrictEqual({ error: 'El id tiene que ser un numero' });
  });
  it('debe devolver un error el juego no fue encontrado', async () => {
    mocks.gamesRepository.deleteOneById.mockRejectedValue(
      new ErrorWithStatus(404, 'El juego fue no encontrado'),
    );
    const response = await request(app).delete('/games/6464');
    expect(response.statusCode).toBe(404);
    expect(response.body).toStrictEqual({ error: 'El juego fue no encontrado' });
  });
});

describe('Cuando se intenta actualizar un juego', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('debe devolver el juego actualizado cuando todo es correcto', async () => {
    const newgamestructure = { name: 'Elden ring', quanty: '3' };
    const expectedgamestructure = { ...games[0], ...newgamestructure };
    mocks.gamesRepository.updateOneById.mockResolvedValue(expectedgamestructure);
    const response = await request(app).put('/games/123').send(newgamestructure);
    expect(mocks.gamesRepository.updateOneById).toHaveBeenCalledTimes(1);
    expect(mocks.gamesRepository.updateOneById).toBeCalledWith(games[0].id, newgamestructure);
    expect(response.statusCode).toBe(200);
    expect(response.body).toStrictEqual(expectedgamestructure);
  });
  it('debe devolver un error cuando el id no es un numero', async () => {
    const newgamestructure = { name: 'Alejandro Perez', quanty: '3' };
    const response = await request(app).put('/games/ifhsifj').send(newgamestructure);
    expect(response.statusCode).toBe(400);
    expect(response.body).toStrictEqual({ error: 'El id tiene que ser un numero' });
  });
  it('debe devolver un error el juego no fue encontrado', async () => {
    const newgamestructure = { name: 'elden ring', quanty: '3' };
    mocks.gamesRepository.updateOneById.mockRejectedValue(
      new ErrorWithStatus(404, 'El juego fue no encontrado'),
    );
    const response = await request(app).put('/games/6464').send(newgamestructure);
    expect(response.statusCode).toBe(404);
    expect(response.body).toStrictEqual({ error: 'El juego fue no encontrado' });
  });
  it('debe devolver un error describiendo las causas de porque la validacion fallo', async () => {
    const newgamestructure = { name: 'elden ring', quantity: '3' };
    const response = await request(app).put('/games/123').send(newgamestructure);
    expect(response.statusCode).toBe(400);
    expect(response.body).toStrictEqual({ error: 'El nombre no es valido.' });
  });
});
