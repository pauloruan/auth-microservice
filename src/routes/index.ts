import { Request, Response, Router } from 'express';
import loginRoutes from './login.routes';
import registerRoutes from './register.routes';
import usersRoutes from './users.routes';

const router = Router();

router.get('/', (_req: Request, res: Response) => {
  return res.status(200).json({ message: 'API is running' });
});

router.use('/auth/register', registerRoutes);
router.use('/auth/login', loginRoutes);
router.use('/users', usersRoutes);

export default router;
