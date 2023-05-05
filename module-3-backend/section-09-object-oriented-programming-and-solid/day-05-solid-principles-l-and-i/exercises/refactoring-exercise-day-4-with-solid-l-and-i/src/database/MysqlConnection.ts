import {
  createPool,
  Pool, RowDataPacket,
  OkPacket,
  ResultSetHeader,
} from 'mysql2/promise';

export default class MysqlConnection {
  private pool: Pool;

  constructor() {
    this.pool = createPool({
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'password',
      database: 'solid_database',
    });
  }
  //  SELECT            UPDATE/DELETE           INSERT
  // RowDataPacket[] | OkPacket         | ResultSetHeader

  query<
    Type extends RowDataPacket[] | OkPacket | ResultSetHeader,
  >(sql: string, params?: unknown[]) {
    return this.pool.execute<Type>(sql, params);
  }
}