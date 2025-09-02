import express from 'express';
import gamesRouter from './src/modules/games/games.routes.js';
import { ZodError } from 'zod/v4';
import { ErrorWithStatus } from './src/utils/errorTypes.js';
import { DatabaseError } from 'pg';
import cors from 'cors';
import usersRouter from './src/modules/users/users.routes.js';
import jwt from 'jsonwebtoken';
import loginRouter from './src/modules/login/login.routes.js';
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ hola: 'mundo' });
});

app.use('/api/games', gamesRouter);
app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);

app.use((err, req, res, _next) => {
  console.log(err);

  if (err instanceof ZodError) {
    const messages = err.issues.map((zodError) => zodError.message);
    const message = messages.join(',\n');
    return res.status(400).json({ error: message });
  }

  if (err instanceof ErrorWithStatus) {
    return res.status(err.status).json({ error: err.message });
  }

  if (err instanceof DatabaseError) {
    if (err.code === '22P02') {
      return res.status(400).json({ error: 'Hubo un error. Contacte al administrador' });
    }
    if (err.code === '23505') {
      return res
        .status(400)
        .json({ error: 'El correo ya esta en uso. Por favor intente con otro.' });
    }
  }

  if (err instanceof jwt.TokenExpiredError) {
    return res.status(403).json({ error: 'El token ha expirado' });
  }

  res.status(500).json({ err });
});

export default app;
