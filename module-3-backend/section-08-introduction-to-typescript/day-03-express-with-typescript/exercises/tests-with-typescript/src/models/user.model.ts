import { RowDataPacket } from 'mysql2/promise';
import { User } from '../types/User';
import connection from '../database/connection';

// select => RowDataPacket[]
// update => OkPacket
// delete => OkPacket
// insert => ResultSetHeader

// [data, buffer] => retorno do execute

async function findAll(): Promise<User[]> {
  const [rows] = await connection.execute<RowDataPacket[]>('SELECT * FROM users');
  return rows as User[];
}

async function findByEmail(email: string): Promise<User | undefined> {
  const [rows] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM users WHERE email = ?', 
    [email],
  );
  // rows[0]
  const [user] = rows;
  return user as User | undefined;
}

export default {
  findAll,
  findByEmail,
};