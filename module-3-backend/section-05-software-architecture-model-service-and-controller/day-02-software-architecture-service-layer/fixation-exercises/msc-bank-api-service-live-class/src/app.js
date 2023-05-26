const express = require('express');
const accountsRouter = require('./routes/accountRouter');
const transactionRouter = require('./routes/transactionRouter');

const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  res.status(200).json({
    message: 'Welcome to TrybeBank',
  });
});

app.use('/accounts', accountsRouter);
app.use('/transactions', transactionRouter);

module.exports = app;
