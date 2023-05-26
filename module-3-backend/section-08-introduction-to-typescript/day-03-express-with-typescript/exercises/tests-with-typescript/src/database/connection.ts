import { createPool } from 'mysql2/promise';

const connection = createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'aula_8_3',
});

export default connection;