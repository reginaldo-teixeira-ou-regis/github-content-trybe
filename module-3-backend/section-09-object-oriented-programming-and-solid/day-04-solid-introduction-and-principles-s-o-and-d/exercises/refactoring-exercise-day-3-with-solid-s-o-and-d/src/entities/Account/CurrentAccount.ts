import Account, { AccountParams } from './Account';

export default class CurrentAccount extends Account {
  private _limit: number; // 1000

  constructor(
    limit: number,
    params: AccountParams,
  ) {
    super(params);
    this._limit = limit;
  }

  public toDebit(value: number): void {
    const calculatedBalance = this._balance - value;

    if (calculatedBalance < (Math.abs(this._limit) * -1)) {
      throw new Error('BALANCE_IS_OVER_LIMIT');
    }

    this._balance = calculatedBalance;
  }
}