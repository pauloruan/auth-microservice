import { Router } from 'express';

import loginMiddleware from '../middlewares/login.middleware';
import loginController from '../modules/login/login.controller';

const loginRoutes = Router();

loginRoutes.post('/', loginMiddleware, loginController);

export default loginRoutes;
