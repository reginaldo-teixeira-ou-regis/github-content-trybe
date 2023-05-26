import Account, { AccountParams } from './Account';

export default class InternationalAccount extends Account {
  private exchangeRate: number;

  constructor(exchangeRate: number, params: AccountParams) {
    super(params);
    this.exchangeRate = exchangeRate;
  }

  public toDebit(value: number): void { // 5 => 1
    const dollarValue = value * this.exchangeRate;
    const finalBalance = this._balance - dollarValue;

    if (finalBalance < 0) {
      throw new Error('INSUFFICIENT_FUNDS');
    }
    this._balance -= dollarValue;
  }
}