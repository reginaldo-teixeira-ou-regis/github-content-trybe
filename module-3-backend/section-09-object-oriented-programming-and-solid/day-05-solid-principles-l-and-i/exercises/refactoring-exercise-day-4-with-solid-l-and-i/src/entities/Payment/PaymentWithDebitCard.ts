import { Executable } from '../interfaces/Executable';
import Payment from './Payment';

export default class PaymentWithDebitCard 
  extends Payment
  implements Executable {
  public toExecute(): string {
    const value = this.getValue();
    this.getOrigin().toDebit(value);
    this.getDestiny().toCredit(value);
    const transactionCode = this.generateTransactionCode();
    this.status = 'paid out';
    return transactionCode;
  }
}