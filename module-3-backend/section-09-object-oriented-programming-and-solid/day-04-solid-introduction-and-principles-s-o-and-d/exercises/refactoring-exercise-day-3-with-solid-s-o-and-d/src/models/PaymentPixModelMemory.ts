import PaymentPix from '../entities/Payment/PaymentPix';
import { PaymentPixModel } from './PaymentPixModel';

export default class PaymentPixModelMemory implements PaymentPixModel {
  payment: PaymentPix[] = [];

  async save(paymentPix: PaymentPix): Promise<void> {
    this.payment.push(paymentPix);
  }
}