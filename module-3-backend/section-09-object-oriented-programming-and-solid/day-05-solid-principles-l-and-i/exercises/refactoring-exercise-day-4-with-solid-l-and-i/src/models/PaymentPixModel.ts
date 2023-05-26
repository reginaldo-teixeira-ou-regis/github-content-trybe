import PaymentPix from '../entities/Payment/PaymentPix';

export interface PaymentPixModel {
  save(PaymentPix: PaymentPix): Promise<void>
}