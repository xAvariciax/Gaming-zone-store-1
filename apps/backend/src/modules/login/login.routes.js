import express from 'express';
import { loginUserRouteSchema } from './login.routes.schemas.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import usersRepository from '../users/users.repository.js';
import { ErrorWithStatus } from '../../utils/errorTypes.js';
const loginRouter = express.Router();

loginRouter.post('/', async (req, res) => {
  const body = loginUserRouteSchema.body.parse(req.body);
  const user = await usersRepository.findByEmail({ email: body.email });
  if (!user) throw new ErrorWithStatus(400, 'Usuario o contraseña invalidos');
  const isPasswordValid = await bcrypt.compare(body.password, user.passwordhash);
  if (!isPasswordValid) throw new ErrorWithStatus(400, 'Usuario o contraseña invalidos');
  if (!user.verify_email) throw new ErrorWithStatus(400, 'Usuario o contraseña invalidos');

  const accessToken = jwt.sign(
    { id: user.id, email: user.email },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: '1d' },
  );

  res.cookie('access_token', accessToken, {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
  });

  res.status(200).json({ id: user.id, email: user.email, accessToken });
});

export default loginRouter;
