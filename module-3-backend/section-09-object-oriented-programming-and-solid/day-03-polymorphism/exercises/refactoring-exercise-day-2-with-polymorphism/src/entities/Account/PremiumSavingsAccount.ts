import SavingsAccount from './SavingsAccount';

export default class PremiumSavingsAccount extends SavingsAccount {
  constructor(interestRate: number, clientName: string, cpf: string) {
    super(interestRate, clientName, cpf);
    this.toCredit(900);
  }
}