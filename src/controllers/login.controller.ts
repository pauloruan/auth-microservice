import { Request, Response } from 'express';
import loginService from '../service/login.service';

export default async function loginController(
  req: Request,
  res: Response
): Promise<any> {
  const user = await loginService(req.body);
  return res.status(200).json(user);
}
