// export default class CrowdFunding {
//   private _name: string;
//   private _balance: number;

import { Creditable } from '../interfaces/Creditable';

//   constructor(
//     name: string,
//     balance: number,
//   ) {
//     this._name = name;
//     this._balance = balance;
//   }
// }

export default class CrowdFunding implements Creditable {
  constructor(
    private _name: string,
    private _balance: number,
  ) {
  }

  toCredit(value: number): void {
    this._balance += value;
  }

  getName() {
    return this._name;
  }

  getBalance() {
    return this._balance;
  }
}