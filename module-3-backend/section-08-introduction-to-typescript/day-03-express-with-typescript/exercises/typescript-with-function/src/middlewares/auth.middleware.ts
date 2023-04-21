import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

type JwtPayload = {
  email: string
  iat: number
};

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
    const decoded = jwt.verify(token, 'AUSDHAISU') as JwtPayload;
    (req as AuthenticatedRequest).auth = {
      email: decoded.email,
    };
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token inválido' });
  }
}

export default authMiddleware;