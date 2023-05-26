import userModel from '../models/user.model';
import jwtService from './jwt.service';

async function findAll() {
  const users = await userModel.findAll();
  return users;
}

async function login(email: string, password: string) {
  const user = await userModel.findByEmail(email);

  if (!user || password !== user.password) {
    throw new Error('UNAUTHORIZED');
  }

  return jwtService.sign({ id: user.id, email: user.email });
}

export default {
  findAll,
  login,
};