import { Router } from 'express';
import { AuthenticateClientController } from '../modules/account/useCases/authenticateUser/AuthenticateClientController';
import { CreateClientController } from '../modules/clients/useCases/createClient/CreateClientController';

const clientRoutes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();

clientRoutes.post('/', createClientController.handle);
clientRoutes.post('/auth', authenticateClientController.handle);

export { clientRoutes }