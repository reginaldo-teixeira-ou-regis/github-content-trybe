import Account from './Account';

export default class SavingsAccount extends Account {
  private _annualInterestRate: number;

  constructor(
    interestRate: number, 
    clientName: string, 
    cpf: string,
  ) {
    super(clientName, 100, cpf);
    this._annualInterestRate = interestRate;
    if (interestRate < 0) {
      throw new Error('INVALID_INTEREST');
    }
  }

  forecastYield(): number {
    return this.getBalance() * this._annualInterestRate;
  }
}