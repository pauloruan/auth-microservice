import { Request, Response, NextFunction } from 'express';
import loginSchema from '../schemas/login.schema';

export default function loginMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): any {
  const validationUser = loginSchema.safeParse(req.body);
  if (!validationUser.success) {
    return res.status(400).json({ message: validationUser.error });
  }
  next();
}
