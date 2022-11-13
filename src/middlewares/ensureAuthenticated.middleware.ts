import { NextFunction, Request, Response } from 'express';
import { verifyToken } from '../helpers/jwt.helper';

export default function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
): any {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Token is missing' });
  }

  const [, token] = authHeader.split(' ');

  try {
    verifyToken(token);
    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}
