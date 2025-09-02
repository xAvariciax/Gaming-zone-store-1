import { z } from 'zod/v4';

const NAME_REGEX = /^[A-Z][a-z]*[ ][A-Z][a-z]{3,}[ ]{0,1}$/;
const QUANTITY_REGEX = /^[1-9][0-9]{0,2}$/;

export const gamesSchema = z.object({
  id: z.number(),
  name: z.string().regex(NAME_REGEX, 'El nombre no es valido.'),
  quanty: z.string().regex(QUANTITY_REGEX, 'La cantidad tiene que ser entre 1 y 999'),
});
