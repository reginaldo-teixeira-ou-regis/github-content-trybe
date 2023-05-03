import Account from './entities/Account/Account';
import PremiumSavingsAccount from './entities/Account/PremiumSavingsAccount';
import { Executable } from './entities/Executable';
import PaymentBySlip from './entities/Payment/PaymentBySlip';
import PaymentWithDebitCard from './entities/Payment/PaymentWithDebitCard';

const accountIsaac = new PremiumSavingsAccount(
  0.5, 
  'Isaac Batista', 
  '111.111.111-11',
);
const accountThiago = new Account('Thiago', 1000, '123.123.123-11');
const paymentHotDog = new PaymentBySlip(
  new Date('2022-04-29'),
  {
    origin: accountThiago,
    destiny: accountIsaac,
    value: 10,
    paymentDate: new Date(),
  },
);
const paymentNetflix = new PaymentWithDebitCard({
  origin: accountIsaac,
  destiny: accountThiago,
  paymentDate: new Date(),
  value: 15,
});

console.log(paymentNetflix.getStatus());

function toExecutePayments(payments: Executable[]) {
  payments.forEach((payment) => payment.toExecute());
}

toExecutePayments([paymentHotDog, paymentNetflix]);
console.log(accountIsaac.getBalance());
console.log(paymentNetflix.getStatus());
