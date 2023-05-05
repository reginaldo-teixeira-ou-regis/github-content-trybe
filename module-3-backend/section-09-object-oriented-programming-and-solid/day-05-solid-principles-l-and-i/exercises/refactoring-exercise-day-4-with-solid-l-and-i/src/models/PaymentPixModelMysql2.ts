import MysqlConnection from '../database/MysqlConnection';
import PaymentPix from '../entities/Payment/PaymentPix';
import { PaymentPixModel } from './PaymentPixModel';

export default class PaymentPixModelMysql2 implements PaymentPixModel {
  constructor(
    private connection: MysqlConnection,
  ) {}

  async save(paymentPix: PaymentPix): Promise<void> {
    await this.connection.query(
      'INSERT INTO payment_pix ' 
      + '(date_payment, account_origin_id, account_destiny_id, value, key_pix) '
      + 'VALUES '
      + '(?, ?, ?, ?, ?)',
      [
        paymentPix.getPaymentDate(),
        paymentPix.getOrigin().getId(),
        paymentPix.getDestiny().getId(),
        paymentPix.getValue(),
        paymentPix.getPixKey(),
      ],
    );
  }
}