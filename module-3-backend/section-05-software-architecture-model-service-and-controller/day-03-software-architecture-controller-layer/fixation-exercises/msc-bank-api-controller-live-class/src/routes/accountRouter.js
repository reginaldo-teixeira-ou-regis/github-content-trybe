const { Router } = require('express');
const connection = require('../models/connection');
const accountModel = require('../models/account.model');

const accountsRouter = Router();

accountsRouter.post('/', async (req, res) => {
  const { name, email, type } = req.body;
  const accountId = await accountModel.insertAccount({ name, email, type });
  return res.status(201).json({ id: accountId, name, email, type });
});

accountsRouter.get('/', async (req, res) => {
  const accounts = await accountModel.getAllAccounts();
  return accounts;
});

accountsRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const account = await accountModel.getAccountById(id);
  return account;
});

module.exports = accountsRouter;