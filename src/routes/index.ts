import { Router } from 'express';
import { clientRoutes } from './clients.routes';
import { deliverymanRoutes } from './deliveryman.routes';

const router = Router();

router.use('/clients', clientRoutes);
router.use('/deliveryman', deliverymanRoutes);

export { router }
