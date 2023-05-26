import Payment, { PaymentParams } from './Payment';

export default class PaymentPix extends Payment {
  private _pixKey: string;

  constructor(key: string, params: PaymentParams) {
    super(params);
    this._pixKey = key;
  }

  toExecute(): string {
    const value = this.getValue();
    this.getOrigin().toDebit(value);
    this.getDestiny().toCredit(value);
    this.status = 'paid out';
    const transactionCode = this.generateTransactionCode();
    return transactionCode;
  }

  getPixKey() {
    return this._pixKey;
  }

  protected generateTransactionCode(): string {
    const defaultCode = super.generateTransactionCode();
    return `${defaultCode}-${this._pixKey}`;
  }
}