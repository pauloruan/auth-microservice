import { Router } from 'express';
import registerMiddleware from '../middlewares/register.middleware';
import registerController from '../modules/register/register.controller';

const registerRoutes = Router();

registerRoutes.post('/', registerMiddleware, registerController);

export default registerRoutes;
