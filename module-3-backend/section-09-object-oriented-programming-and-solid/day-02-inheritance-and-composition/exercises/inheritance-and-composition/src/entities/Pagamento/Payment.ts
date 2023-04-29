import crypto from 'node:crypto';
import Account from '../Account/Account';

// - Há tipos diferentes de pagamento:
//   - Pagamento por boleto:
//     - Tem vencimento e aplica multa ao atrasar
//   - Pagamento no cartão de débito:
//     - Não tem vencimento, o valor pago é sempre o original

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
    // const timestamp = Date.now();
    const timestamp = this.paymentDate.getTime();
    const uuid = crypto.randomUUID();
    
    return `${timestamp}-${uuid}`;
  }
}