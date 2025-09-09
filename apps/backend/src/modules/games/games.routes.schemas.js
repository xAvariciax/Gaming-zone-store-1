import { z } from 'zod/v4';
import { gamesSchema } from './games.Schema.js';

const gamesIdSchema = z
  .string()
  .transform((val) => Number(val))
  .refine((val) => !isNaN(val), 'El id tiene que ser un numero');

export const creategamesRouteSchema = {
  params: z.object({}),
  body: gamesSchema.omit({ id: true }),
  queries: z.object({}),
};

export const deletegamesRouteSchema = {
  params: z.object({ id: gamesIdSchema }),
  body: z.object({}),
  queries: z.object({}),
};

export const updategamesRouteSchema = {
  params: z.object({ id: gamesIdSchema }),
  body: gamesSchema.omit({ id: true }),
  queries: z.object({}),
};
