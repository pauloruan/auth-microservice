import { Router } from 'express';
import ensureAuthenticated from '../middlewares/ensureAuthenticated.middleware';
import {
  getUsersController,
  getUserByIdController
} from '../controllers/users.controller';

const usersRouter = Router();

usersRouter.get('/', ensureAuthenticated, getUsersController);
usersRouter.get('/:id', ensureAuthenticated, getUserByIdController);

export default usersRouter;
