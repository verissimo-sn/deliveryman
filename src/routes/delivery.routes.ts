import { Router } from 'express';
import { ensureAuthenticateClient } from '../middlewares/ensureAuthenticateClient';
import { ensureAuthenticateDeliveryman } from '../middlewares/ensureAuthenticateDeliveryman';
import { CreateDeliveryController } from '../modules/deliveries/useCases/createDelivery/CreateDeliveryController';
import { FindAllAvailableController } from '../modules/deliveries/useCases/findAllAvailable/FindAllAvailableController';
import { FindAllClientDeliveriesController } from '../modules/deliveries/useCases/findAllClientDeliveries/FindAllClientDeliveriesController';
import { FindAllDeliverymanDeliveriesController } from '../modules/deliveries/useCases/findAllDeliverymanDeliveries/FindAllDeliverymanDeliveriesController';
import { UpdateDeliverymanController } from '../modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController';

const deliveryRoutes = Router();

const createDeliveryController = new CreateDeliveryController();
const findAllClientDeliveriesController = new FindAllClientDeliveriesController();
const findAllAvailableController = new FindAllAvailableController();
const updateDeliverymanController = new UpdateDeliverymanController();
const findAllDeliverymanDeliveriesController = new FindAllDeliverymanDeliveriesController()


deliveryRoutes.post('/', ensureAuthenticateClient, createDeliveryController.handle);
deliveryRoutes.get('/client', ensureAuthenticateClient, findAllClientDeliveriesController.handle);

deliveryRoutes.patch('/updateDeliveryman/:id', ensureAuthenticateDeliveryman, updateDeliverymanController.handle);
deliveryRoutes.get('/available', ensureAuthenticateDeliveryman, findAllAvailableController.handle);
deliveryRoutes.get('/deliveryman', ensureAuthenticateDeliveryman, findAllDeliverymanDeliveriesController.handle);


export { deliveryRoutes }

