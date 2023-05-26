import Cpf from '../Cpf';

export default class Account {
  private _balance: number;
  private _name: string;
  private _cpf: Cpf;
  private static minimumDeposit = 100;

  constructor(clientName: string, initialDeposit: number, cpf: string) {
    Account.validateDeposit(initialDeposit)
    this._name = clientName;
    this._balance = initialDeposit;
    this._cpf = new Cpf(cpf);
  }

  private static validateDeposit(initialDeposit: number) {
    if (initialDeposit < Account.minimumDeposit) {
      throw new Error('INSUFFICIENT_DEPOSIT');
    }
  }

  public toDebit(value: number) {
    const finalBalance = this._balance - value;

    if (finalBalance < 0) {
      throw new Error('INSUFFICIENT_FUNDS');
    }

    this._balance = finalBalance;
  }

  public toCredit(value: number) {
    this._balance += value;
  }

  public getBalance(): number {
    return this._balance;
  }

  public get name(): string {
    return this._name.toUpperCase();
  }

  public set name(newName: string) {
    if (newName.length === 0) {
      throw new Error('EMPTY_NAME');
    }

    this._name = newName;
  }
}