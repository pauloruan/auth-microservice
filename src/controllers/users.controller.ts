import { Request, Response } from 'express';
import { getUserById, getUsers } from '../service/users.service';

export async function getUsersController(
  _req: Request,
  res: Response
): Promise<any> {
  const users = await getUsers();
  return res.status(200).json(users);
}

export async function getUserByIdController(
  req: Request,
  res: Response
): Promise<any> {
  const { id } = req.params;
  const user = await getUserById(id);
  return res.status(200).json(user);
}
