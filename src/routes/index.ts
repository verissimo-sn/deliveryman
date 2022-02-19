import { Router } from 'express';
import { clientRoutes } from './clients.routes';
import { deliveryRoutes } from './delivery.routes';
import { deliverymanRoutes } from './deliveryman.routes';

const router = Router();

router.use('/clients', clientRoutes);
router.use('/deliveryman', deliverymanRoutes);
router.use('/delivery', deliveryRoutes);

export { router }
