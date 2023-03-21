// validar se as pessoas existem ('to', 'from')
// validar se 'from' tem dinheiro na conta
// validar se 'to' e 'from' não são os mesmo
// validar inputs

const transactionModel = require('../models/transaction.model');
const accountModel = require('../models/account.model');

const getAccountById = async (id) => {
  return accountModel.getAccountById(id);
}

const createTransaction = async (to, from, amount) => {

  validateFields();
  const toExists = await getAccountById(to); // quem esta recebendo
  if (!toExists) {
    throw { message: 'To Not Found ' }
  }

  const fromExists = await getAccountById(from); // quem esta recebendo
  if (!fromExists) {
    throw { message: 'From Not Found ' }
  }

  // inserir a transação no banco de dados
  await transactionModel
    .saveTransaction(to, from, amount);
}

module.exports = {
  createTransaction
}