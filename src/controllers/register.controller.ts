import { Request, Response } from 'express';
import registerService from '../service/register.service';

export default async function registerController(
  req: Request,
  res: Response
): Promise<any> {
  const user = await registerService(req.body);
  return res.status(201).json(user);
}
