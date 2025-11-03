import { z } from 'zod';
import { orderGameSchema } from './orderGame.schemas.js';

const orderIdParamSchema = z
  .string()
  .transform((val) => Number(val))
  .refine((val) => !isNaN(val), 'El ID de la orden tiene que ser un número.');

const gameIdParamSchema = z
  .string()
  .transform((val) => Number(val))
  .refine((val) => !isNaN(val), 'El ID del game tiene que ser un número.');

export const addGameToOrderSchema = {
  body: orderGameSchema.omit({
    id: true,
    orderId: true,
  }),
  params: z.object({
    orderId: orderIdParamSchema,
  }),
};

export const updateGameQuantitySchema = {
  body: z.object({
    newQuantity: orderGameSchema.shape.quantity,
  }),
  params: z.object({
    orderId: orderIdParamSchema,
    gameId: gameIdParamSchema,
  }),
};

export const deleteGameFromOrderSchema = {
  params: z.object({
    orderId: orderIdParamSchema,
    gameId: gameIdParamSchema,
  }),
};
