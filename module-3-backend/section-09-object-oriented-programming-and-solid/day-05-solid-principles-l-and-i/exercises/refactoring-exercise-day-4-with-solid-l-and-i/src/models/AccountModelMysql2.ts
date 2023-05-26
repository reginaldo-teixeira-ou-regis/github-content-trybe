import { RowDataPacket } from 'mysql2/promise';
import MysqlConnection from '../database/MysqlConnection';
import Account from '../entities/Account/Account';
import FactoryAccount, { 
  AccountFactoryParams, 
} from '../entities/Account/FactoryAccount';
import { AccountModel } from './AccountModel';

export default class AccountModelMysql2 implements AccountModel {
  constructor(
    private connection: MysqlConnection,
  ) {}

  async updateBalance(account: Account): Promise<void> {
    await this.connection.query(
      'UPDATE account SET balance = ? WHERE id = ?',
      [account.getBalance(), account.getId()],
    );
  }

  async findById(id: number): Promise<Account | null> {
    const [rows] = await this.connection.query<RowDataPacket[]>(
      'SELECT * FROM account WHERE id = ?', 
      [id],
    );

    if (rows.length === 0) {
      return null;
    }

    const found = rows[0] as AccountFactoryParams;
    found.balance = Number(found.balance);

    const account = FactoryAccount.create(found);
    return account;
  }
}