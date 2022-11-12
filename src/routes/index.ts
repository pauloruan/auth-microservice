import { Router, Request, Response } from 'express';
import registerRoutes from './register.routes';
import loginRoutes from './login.routes';

const router = Router();

router.get('/', (_req: Request, res: Response) => {
  return res.status(200).json({ message: 'API is running' });
});

router.use('/auth/register', registerRoutes);
router.use('/auth/login', loginRoutes);

export default router;
