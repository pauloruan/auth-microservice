import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (_request: Request, response: Response) => {
  return response.json({ message: 'API is running' });
});

export default router;
