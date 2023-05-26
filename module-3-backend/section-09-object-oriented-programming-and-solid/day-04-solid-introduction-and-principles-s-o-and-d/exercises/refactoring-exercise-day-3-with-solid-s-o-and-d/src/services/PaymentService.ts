import PaymentPix from '../entities/Payment/PaymentPix';
import { AccountModel } from '../models/AccountModel';
import { PaymentPixModel } from '../models/PaymentPixModel';

type ToExecutePixParams = {
  accountOriginId: number;
  accountDestinationId: number;
  keyPix: string;
  value: number;
};

class PaymentService {
  private paymentModel: PaymentPixModel;
  private accountModel: AccountModel;

  constructor(
    paymentModel: PaymentPixModel,
    accountModel: AccountModel,
  ) {
    this.accountModel = accountModel;
    this.paymentModel = paymentModel;
  }

  async toExecutePix(params: ToExecutePixParams): Promise<{ code: string }> {
    const destinationAccount = await this.accountModel
      .findById(params.accountDestinationId);
    
    if (!destinationAccount) throw new Error('DESTINATION_ACCOUNT_NOT_FOUND');
    const originAccount = await this.accountModel
      .findById(params.accountOriginId);
    
    if (!originAccount) throw new Error('ORIGIN_ACCOUNT_NOT_FOUND');

    const paymentPix = new PaymentPix(params.keyPix, {
      paymentDate: new Date(),
      destiny: destinationAccount,
      origin: originAccount,
      value: params.value,
    });
    
    const code = paymentPix.toExecute();
    this.paymentModel.save(paymentPix);
    // this.accountModel.updateBalance(destinationAccount);
    // this.accountModel.updateBalance(originAccount);
    return { code };
  }
}

export default PaymentService;