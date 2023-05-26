import Account from '../entities/Account/Account';
import CurrentAccount from '../entities/Account/CurrentAccount';
import SavingsAccount from '../entities/Account/SavingsAccount';
import { AccountModel } from './AccountModel';

export default class AccountModelMemory implements AccountModel {
  accounts: Account[] = [
    new CurrentAccount(1000, {
      cpf: '111.111.111-11',
      id: 1,
      name: 'Antonio',
      balance: 100,
    }),
    new SavingsAccount(0.1, {
      cpf: '222.222.222-22',
      id: 2,
      name: 'Maria',
      balance: 500,
    }),
  ];

  async findById(id: number): Promise<Account | null> {
    const found = this.accounts.find((account) => account.getId() === id);

    if (!found) {
      return null;
    }

    return found;
  }

  async updateBalance(account: Account): Promise<void> {
    const accountToUpdate = this.accounts
      .find((acc) => acc.getId() === account.getId());
  
    if (!accountToUpdate) {
      throw new Error('Account not found');
    }
  
    // accountToUpdate.setBalance(account.getBalance());
  }
}