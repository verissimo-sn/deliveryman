import { Router } from 'express';
import { AuthenticateDeliverymanController } from '../modules/account/useCases/authenticateDeliveryman/AuthenticateDeliverymanController';
import { CreateDeliverymanController } from '../modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';

const deliverymanRoutes = Router();

const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();

deliverymanRoutes.post('/', createDeliverymanController.handle);
deliverymanRoutes.post('/auth', authenticateDeliverymanController.handle);

export { deliverymanRoutes }

