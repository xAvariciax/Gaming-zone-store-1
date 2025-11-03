import { z } from 'zod/v4';

// const NAME_REGEX = /^[A-Z][a-z]*[ ][A-Z][a-z]{3,}[ ]{0,1}$/;
// const QUANTITY_REGEX = /^[1-9][0-9]{0,2}$/;

export const gamesSchema = z.object({
  id: z.number(),
  name: z.string(),
  quantity: z.number(),
  description: z.string(),
  url: z.string(),
  price: z
    .number()
    .int()
    .positive('El precio debe ser un número entero positivo.')
    .min(1, 'El precio debe ser mayor a cero.'),
  console: z.string(),
});

// export const gamesSchema = z.object({
//   id: z.number(),
//   name: z.string().regex(NAME_REGEX, 'El nombre no es valido.'),
//   quanty: z.string().regex(QUANTITY_REGEX, 'La cantidad tiene que ser entre 1 y 999'),
// });
