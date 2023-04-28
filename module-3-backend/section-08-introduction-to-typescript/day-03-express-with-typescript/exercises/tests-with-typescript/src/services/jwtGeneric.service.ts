import jwt from 'jsonwebtoken';

function sign<Type extends object>(payload: Type): string {
  const token = jwt.sign(payload, 'SECRET');
  return token;
}

function verify<Type>(token: string): Type {
  const decoded = jwt.verify(token, 'SECRET');
  return decoded as Type;
}

export default {
  sign,
  verify,
};