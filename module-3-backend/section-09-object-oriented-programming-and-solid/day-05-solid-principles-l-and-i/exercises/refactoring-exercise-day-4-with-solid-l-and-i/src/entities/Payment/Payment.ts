import crypto from 'node:crypto';
import { Debitable } from '../interfaces/Debitable';
import { identifiable } from '../interfaces/identifiable';
import { Creditable } from '../interfaces/Creditable';

export type PaymentParams = {
  origin: Debitable & identifiable;
  destiny: Creditable & identifiable;
  value: number;
  paymentDate: Date;
};

export default abstract class Payment {
  private origin: Debitable & identifiable;
  private destiny: Creditable & identifiable;
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

  public getOrigin(): Debitable & identifiable {
    return this.origin;
  }

  public getDestiny(): Creditable & identifiable {
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