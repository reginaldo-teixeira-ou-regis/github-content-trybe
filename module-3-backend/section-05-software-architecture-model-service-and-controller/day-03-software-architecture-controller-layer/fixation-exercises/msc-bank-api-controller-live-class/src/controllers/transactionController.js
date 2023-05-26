const transactionService = require('../services/transaction.service');

const makeTransaction = async (req, res) => {
  const { from, to, amount } = req.body;
  try {
    const result = await transactionService.createTransaction(to, from, amount);
    return res.status(201).json({ ...result, message: 'Success transfer' });
  }
  catch (err) {
    return res.status(409).json({ message: 'To and From can not be equal' })
  }
}

module.exports = {
  makeTransaction
}