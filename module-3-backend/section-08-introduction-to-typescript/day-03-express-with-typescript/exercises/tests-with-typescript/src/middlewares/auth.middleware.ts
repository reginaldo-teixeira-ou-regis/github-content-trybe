import { NextFunction, Request, Response } from 'express';
import jwtService from '../services/jwt.service';

export type AuthenticatedRequest = Request & {
  auth: {
    email: string
  }
};

async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token não enviado' });
  }

  try {
    const decoded = jwtService.verify(token);
    (req as AuthenticatedRequest).auth = {
      email: decoded.email,
    };
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token inválido' });
  }
}

export default authMiddleware;