import Account, { AccountParams } from './Account';

export default class SavingsAccount extends Account {
  private _annualInterestRate: number;

  constructor(
    interestRate: number, 
    acountParams: AccountParams,
  ) {
    super(acountParams);
    this._annualInterestRate = interestRate;
    if (interestRate < 0) {
      throw new Error('INVALID_INTEREST');
    }
  }

  toDebit(value: number) {
    const finalBalance = this._balance - value;
  
    if (finalBalance < 0) {
      throw new Error('INSUFFICIENT_FUNDS');
    }
  
    this._balance = finalBalance;
  }

  forecastYield(): number {
    return this.getBalance() * this._annualInterestRate;
  }
}