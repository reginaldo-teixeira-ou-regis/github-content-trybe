import { Executable } from '../Executable';
import Payment, { PaymentParams } from './Payment';

export default class PaymentBySlip 
  extends Payment implements Executable {
  private expirationDate: Date;

  constructor(
    expirationDate: Date,
    params: PaymentParams,
  ) {
    super(params);
    this.expirationDate = expirationDate;
  }

  public toExecute(): string {
    const finalValue = this.calculateFinalValue();
    this.getOrigin().toDebit(finalValue);
    this.getDestiny().toCredit(finalValue);
    const transactionCode = this.generateTransactionCode();
    this.status = 'paid out';
    return transactionCode;
  }
  
  private calculateFinalValue() {
    const value = this.getValue();
    if (this.itHasExpired()) {
      return value * 1.2;
    }

    return value;
  }

  private itHasExpired() {
    const paymentDate = this.getPaymentDate();
    return paymentDate.getTime() > this.expirationDate.getTime();
  }
}
