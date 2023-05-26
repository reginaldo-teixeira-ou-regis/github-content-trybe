import express from 'express';
import PaymentController from './controllers/PaymentController';
import MysqlConnection from './database/MysqlConnection';
import AccountModelMysql2 from './models/AccountModelMysql2';
import PaymentPixModelMysql2 from './models/PaymentPixModelMysql2';
import PaymentService from './services/PaymentService';

const app = express();
app.use(express.json());

const connection = new MysqlConnection();
const paymentPixModel = new PaymentPixModelMysql2(connection);
const accountModel = new AccountModelMysql2(connection);
// const paymentPixModel = new AccountModelMemory();
// const accountModel = new AccountModelMemory();
const paymentService = new PaymentService(paymentPixModel, accountModel);
const paymentController = new PaymentController(paymentService);

app.post(
  '/pay/pix', 
  async (req, res) => paymentController.toExecutePix(req, res),
);

app.get('/accounts/:id', async (req, res) => {
  const { id } = req.params;
  const account = await accountModel.findById(Number(id));
  return res.status(200).json(account);
});

export default app;