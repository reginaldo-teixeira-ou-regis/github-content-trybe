import Cpf from '../Cpf';

export type AccountParams = {
  clientName: string
  currentBalance: number
  cpf: string
  id: number
};

export default abstract class Account {
  private _id: number;
  protected _balance: number;
  private _name: string;
  private _cpf: Cpf;

  constructor(params: AccountParams) {
    this._name = params.clientName;
    this._balance = params.currentBalance;
    this._cpf = new Cpf(params.cpf);
    this._id = params.id;
  }

  public abstract toDebit(value: number): void;

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

  public getId() {
    return this._id;
  }
}