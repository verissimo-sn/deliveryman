import { Router } from 'express';
import { ensureAuthenticateClient } from '../middlewares/ensureAuthenticateClient';
import { ensureAuthenticateDeliveryman } from '../middlewares/ensureAuthenticateDeliveryman';
import { CreateDeliveryController } from '../modules/deliveries/useCases/createDelivery/CreateDeliveryController';
import { FindAllAvailableController } from '../modules/deliveries/useCases/findAllAvailable/FindAllAvailableController';
import { FindAllClientDeliveriesController } from '../modules/deliveries/useCases/findAllClientDeliveries/FindAllClientDeliveriesController';
import { UpdateDeliverymanController } from '../modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController';

const deliveryRoutes = Router();

const createDeliveryController = new CreateDeliveryController();
const findAllAvailableController = new FindAllAvailableController();
const updateDeliverymanController = new UpdateDeliverymanController();
const findAllClientDeliveriesController = new FindAllClientDeliveriesController();


deliveryRoutes.post('/', ensureAuthenticateClient, createDeliveryController.handle);
deliveryRoutes.patch('/updateDeliveryman/:id', ensureAuthenticateDeliveryman, updateDeliverymanController.handle);
deliveryRoutes.get('/available', ensureAuthenticateDeliveryman, findAllAvailableController.handle);
deliveryRoutes.get('/clientDeliveries', ensureAuthenticateClient, findAllClientDeliveriesController.handle);

export { deliveryRoutes }

