import express from 'express';
import paymentMethodsRepository from './paymentMethods.repository.js';
import {
  createPaymentMethodsRouteSchema,
  deletePaymentMethodsRouteSchema,
  updatePaymentMethodsRouteSchema,
} from './paymentMethods.routes.schemas.js';
const paymentMethodsRouter = express.Router();

paymentMethodsRouter.get('/', async (req, res) => {
  const body = req.body;
  const paymentMethods = await paymentMethodsRepository.getAll(body);
  res.json(paymentMethods);
});

paymentMethodsRouter.post('/', async (req, res) => {
  console.log(1);
  const body = createPaymentMethodsRouteSchema.body.parse(req.body);
  console.log(2);
  const newPaymentMethod = await paymentMethodsRepository.addOne(body);
  console.log(3);
  res.json(newPaymentMethod);
});

paymentMethodsRouter.delete('/:id', async (req, res) => {
  const params = deletePaymentMethodsRouteSchema.params.parse(req.params);
  console.log('PARAMS', params);
  const paymentMethodDeleted = await paymentMethodsRepository.deleteOneById({
    paymentMethodId: params.id,
  });
  console.log('METODO DE PAGO ELIMINADO', paymentMethodDeleted);

  res.json(paymentMethodDeleted);
});

paymentMethodsRouter.put('/:id', async (req, res) => {
  const body = updatePaymentMethodsRouteSchema.body.parse(req.body);
  const params = updatePaymentMethodsRouteSchema.params.parse(req.params);
  const paymentMethodsUpdated = await paymentMethodsRepository.updateOneById(params.id, {
    ...body,
  });
  res.json(paymentMethodsUpdated);
});

export default paymentMethodsRouter;
