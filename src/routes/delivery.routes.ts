import { Router } from 'express';
import { ensureAuthenticateClient } from '../middlewares/ensureAuthenticateClient';
import { CreateDeliveryController } from '../modules/deliveries/useCases/createDelivery/CreateDeliveryController';
import { FindAllAvailableController } from '../modules/deliveries/useCases/findAllAvailable/FindAllAvailableController';

const deliveryRoutes = Router();

const createDeliveryController = new CreateDeliveryController();
const findAllAvailableController = new FindAllAvailableController();

deliveryRoutes.post('/', ensureAuthenticateClient, createDeliveryController.handle);
deliveryRoutes.get('/available', findAllAvailableController.handle);

export { deliveryRoutes }

