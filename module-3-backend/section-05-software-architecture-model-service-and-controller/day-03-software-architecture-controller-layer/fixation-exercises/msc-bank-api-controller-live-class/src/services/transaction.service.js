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
  if (to === from) {
    throw { message: 'To and From can not be equal', statusCode: 409 }
  }

  const toExists = await getAccountById(to); // quem esta recebendo
  if (!toExists) {
    throw { message: 'To Not Found ', statusCode: 400 }
  }

  const fromExists = await getAccountById(from); // quem esta recebendo
  if (!fromExists) {
    throw { message: 'From Not Found ', statusCode: 400 }
  }

  // inserir a transação no banco de dados
  const result = await transactionModel
    .saveTransaction(to, from, amount);

  return result;
}

module.exports = {
  createTransaction
}