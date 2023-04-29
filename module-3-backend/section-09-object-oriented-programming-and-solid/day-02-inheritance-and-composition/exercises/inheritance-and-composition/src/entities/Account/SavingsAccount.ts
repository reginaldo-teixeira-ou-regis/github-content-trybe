import Account from './Account';

// Toda conta poupança é criada com 100 reais de brinde

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

  preverRendimento(): number {
    return this.getBalance() * this._annualInterestRate;
  }
}