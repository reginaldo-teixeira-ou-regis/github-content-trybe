import jwt from 'jsonwebtoken';
import userModel from '../models/user.model';
import { User } from '../types/User';

// Array<User> === User[] Array é um tipo GENÉRICO!!
async function findAll(): Promise<User[]> {
  const users = await userModel.findAll();
  return users;
}

// Validar o email -> Verificar se existe algum usuário com esse email
// Se o usuário não existir? 401
// Se o usuário existir? 
// Validar a senha -> Comparar a senha do banco com a senha enviada
// Se a senha for inválida? 401
// Se a senha for válida
// Criar e retornar token jwt
async function login(email: string, password: string): Promise<string> {
  const user = await userModel.findByEmail(email);

  if (!user || password !== user.password) {
    throw new Error('UNAUTHORIZED');
  }

  return jwt.sign({ email: user.email }, 'AUSDHAISU');
}

export default {
  findAll,
  login,
};