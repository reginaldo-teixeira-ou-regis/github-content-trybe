import Account from '../entities/Account/Account';
import CurrentAccount from '../entities/Account/CurrentAccount';
import SavingsAccount from '../entities/Account/SavingsAccount';
import { AccountModel } from './AccountModel';

export default class AccountModelMemory implements AccountModel {
  accounts: Account[] = [
    new CurrentAccount(1000, {
      cpf: '111.111.111-11',
      id: 1,
      clientName: 'Antonio',
      currentBalance: 100,
    }),
    new SavingsAccount(0.1, {
      cpf: '222.222.222-22',
      id: 2,
      clientName: 'Maria',
      currentBalance: 500,
    }),
  ];

  async findById(id: number): Promise<Account | null> {
    const found = this.accounts.find((account) => account.getId() === id);

    if (!found) {
      return null;
    }

    return found;
  }
}