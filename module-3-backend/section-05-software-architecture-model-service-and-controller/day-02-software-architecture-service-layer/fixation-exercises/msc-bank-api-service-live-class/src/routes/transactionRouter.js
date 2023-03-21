const transactionRouter = require('express').Router();
const transactionModel = require('../models/transaction.model');
const transactionService = require('../services/transaction.service');
const validateTransactionMiddleware = require('../middlewares/validateTransaction');


transactionRouter.post('/transactions', validateTransactionMiddleware, async (req, res) => {
  const { from_account, to_account, amount } = req.body;

  const result = transactionService.createTransaction(to_account, from_account, amount);

  return res.status(201).json(result);
});

transactionRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const [result] = await connection.execute(`
  SELECT tr.amount, ac2.name AS 'from', ac.name AS 'to' FROM transactions AS tr
  INNER JOIN accounts AS ac ON tr.to_account = ac.id
  INNER JOIN accounts AS ac2 ON tr.from_account = ac2.id
  WHERE tr.id = ?`, [id]);

  return res.status(200).json(result);
});

// MSC -> MODEL - SERVICE - CONTROLLER

module.exports = transactionRouter;