import jwt from 'jsonwebtoken';

type AppJwtPayload = {
  id: number,
  email: string
};

function sign(payload: AppJwtPayload): string {
  const token = jwt.sign(payload, 'SECRET');
  return token;
}

function verify(token: string): AppJwtPayload {
  const decoded = jwt.verify(token, 'SECRET');
  return decoded as AppJwtPayload;
}

export default {
  sign,
  verify,
};