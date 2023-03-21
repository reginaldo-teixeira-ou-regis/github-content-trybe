const transactionRouter = require('express').Router();
const transactionService = require('../services/transaction.service');
const validateTransactionMiddleware = require('../middlewares/validateTransaction');
const transactionController = require('../controllers/transactionController');

transactionRouter.post('/transactions',
  validateTransactionMiddleware, // next
  transactionController.makeTransaction
);


// MSC -> MODEL - SERVICE - CONTROLLER

module.exports = transactionRouter;