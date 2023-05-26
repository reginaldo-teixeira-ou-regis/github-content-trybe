import Cpf from '../Cpf';
import { Creditable } from '../interfaces/Creditable';
import { Debitable } from '../interfaces/Debitable';

export type AccountParams = {
  name: string
  balance: number
  cpf: string
  id: number
};

export default abstract class Account implements Creditable, Debitable {
  private _id: number;
  protected _balance: number;
  private _name: string;
  private _cpf: Cpf;

  constructor(params: AccountParams) {
    this._name = params.name;
    this._balance = params.balance;
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

  public setBalance(): number {
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