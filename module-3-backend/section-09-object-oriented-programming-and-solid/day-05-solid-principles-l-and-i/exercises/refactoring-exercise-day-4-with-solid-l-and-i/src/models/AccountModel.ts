import Account from '../entities/Account/Account';

export interface AccountModel {
  findById(id: number): Promise<Account | null>
  updateBalance(account: Account): Promise<void>
}