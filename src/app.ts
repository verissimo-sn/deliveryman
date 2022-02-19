import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { errorInterceptorMiddleware } from './middlewares/errorInterceptor';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(router);
app.use(errorInterceptorMiddleware);

export { app }