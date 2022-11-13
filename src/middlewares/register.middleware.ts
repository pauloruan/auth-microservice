import { NextFunction, Request, Response } from 'express';
import registerSchema from '../schemas/register.schema';

export default function registerMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): any {
  const validationUser = registerSchema.safeParse(req.body);
  if (!validationUser.success) {
    return res.status(400).json({ message: validationUser.error });
  }
  next();
}
