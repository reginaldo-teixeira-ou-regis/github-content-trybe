import Cpf from '../Cpf';

export default class Account {
  private _balance: number;
  private _name: string;
  private _cpf: Cpf;

  constructor(clientName: string, initialDeposit: number, cpf: string) {
    if (initialDeposit < 100) {
      throw new Error('INSUFFICIENT_DEPOSIT');
    }

    this._name = clientName;
    this._balance = initialDeposit;
    this._cpf = new Cpf(cpf);
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