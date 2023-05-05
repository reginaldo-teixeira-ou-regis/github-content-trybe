import Account, { AccountParams } from './Account';
import CurrentAccount from './CurrentAccount';
import SavingsAccount from './SavingsAccount';

export type AccountFactoryParams = AccountParams & (
  {
    type: 'corrente'
    limit: number
  } | {
    type: 'poupança'
    interestRate: number
  }
);

export default class FactoryAccount {
  static create(params: AccountFactoryParams): Account {
    if (params.type === 'corrente') {
      return new CurrentAccount(params.limit, {
        cpf: params.cpf,
        id: params.id,
        name: params.name,
        balance: params.balance,
      });
    }

    if (params.type === 'poupança') {
      return new SavingsAccount(params.interestRate, {
        cpf: params.cpf,
        id: params.id,
        name: params.name,
        balance: params.balance,
      });
    }

    throw new Error('INVALID_ACCOUNT_TYPE');
  }
}