import { Router } from 'express';
import loginController from '../controllers/login.controller';
import loginMiddleware from '../middlewares/login.middleware';

const loginRoutes = Router();

loginRoutes.post('/', loginMiddleware, loginController);

export default loginRoutes;
