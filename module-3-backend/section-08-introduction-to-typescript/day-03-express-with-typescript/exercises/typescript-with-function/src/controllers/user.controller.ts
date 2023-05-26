import { Request, Response } from 'express';
import { AuthenticatedRequest } from '../middlewares/auth.middleware';
import userService from '../services/user.service';

async function findAll(req: Request, res: Response) {
  // console.log((req as AuthenticatedRequest).auth);
  const authenticatedRequest = req as AuthenticatedRequest;
  console.log(authenticatedRequest.auth);
  const users = await userService.findAll();
  return res.status(200).json(users);
}

async function login(req: Request, res: Response) {
  const { email, password } = req.body;

  if (!email || typeof email !== 'string') {
    return res.status(400).json({ message: 'E-mail inválido' });
  }

  if (!password || typeof password !== 'string') {
    return res.status(400).json({ message: 'Senha inválida' });
  }

  const token = await userService.login(email, password);
  return res.status(200).json({ token });
}

export default {
  findAll,
  login,
};