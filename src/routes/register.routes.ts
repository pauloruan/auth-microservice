import { Router } from 'express';
import registerController from '../controllers/register.controller';
import registerMiddleware from '../middlewares/register.middleware';

const registerRoutes = Router();

registerRoutes.post('/', registerMiddleware, registerController);

export default registerRoutes;
