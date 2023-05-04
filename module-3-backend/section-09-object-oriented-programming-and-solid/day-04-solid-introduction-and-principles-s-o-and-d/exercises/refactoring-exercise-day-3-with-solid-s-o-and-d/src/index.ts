import AccountModelMemory from './models/AccountModelMemory';
import PaymentPixModelMemory from './models/PaymentPixModelMemory';
import PaymentService from './services/PaymentService';

async function main() {
  const accountModel = new AccountModelMemory();
  const paymentPixModel = new PaymentPixModelMemory();
  const paymentService = new PaymentService(paymentPixModel, accountModel);
  const { code } = await paymentService.toExecutePix({
    keyPix: '84-8888-8888',
    accountDestinationId: 1,
    accountOriginId: 2,
    value: 50,
  });
  console.log(accountModel.accounts);
  console.log(' ');
  console.log(`Codigo da transação: ${code}`);
}

main();