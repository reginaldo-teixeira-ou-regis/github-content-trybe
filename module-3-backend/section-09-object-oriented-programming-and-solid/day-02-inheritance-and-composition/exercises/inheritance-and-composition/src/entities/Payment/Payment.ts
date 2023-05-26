import crypto from 'node:crypto';
import Account from '../Account/Account';

export type PaymentParams = {
  origin: Account;
  destiny: Account;
  value: number;
  paymentDate: Date;
};

export default class Payment {
  private origin: Account;
  private destiny: Account;
  private value: number;
  private paymentDate: Date;
  protected status: 'pending' | 'paid out' = 'pending';

  constructor(params: PaymentParams) {
    this.origin = params.origin;
    this.destiny = params.destiny;
    this.value = params.value;
    this.paymentDate = params.paymentDate;

    if (params.value < 0) {
      throw new Error('VALUE_INVALID');
    }
  }

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