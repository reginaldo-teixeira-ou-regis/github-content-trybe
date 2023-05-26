import crypto from 'node:crypto';
import Account from '../Account/Account';

export type PaymentParams = {
  origin: Account;
  destiny: Account;
  value: number;
  paymentDate: Date;
};

export default abstract class Payment {
  private origin: Account;
  private destiny: Account;
  private value: number;
  private paymentDate: Date;
  protected status: 'pending' | 'paid out' = 'pending';
  private static minimumValue = 0;

  constructor(params: PaymentParams) {
    Payment.validateValue(params.value);

    this.origin = params.origin;
    this.destiny = params.destiny;
    this.value = params.value;
    this.paymentDate = params.paymentDate;
  }

  private static validateValue(value: number) {
    if (value < Payment.minimumValue) {
      throw new Error('VALUE_INVALID');
    }
  }

  abstract toExecute(): string;

  public getOrigin(): Account {
    return this.origin;
  }

  public getDestiny(): Account {
    return this.destiny;
  }

  public getValue(): number {
    return this.value;
  }

  public getStatus(): 'pending' | 'paid out' {
    return this.status;
  }

  public getPaymentDate(): Date {
    return this.paymentDate;
  }

  protected generateTransactionCode(): string {
    const timestamp = this.paymentDate.getTime();
    const uuid = crypto.randomUUID();

    return `${timestamp}-${uuid}`;
  }
}