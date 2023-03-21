require('express-async-errors');
const express = require('express');
const accountsRouter = require('./routes/accountRouter');
const transactionRouter = require('./routes/transactionRouter');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  res.status(200).json({
    message: 'Welcome to TrybeBank',
  });
});

app.use(accountsRouter);
app.use(transactionRouter);
app.use(errorMiddleware);

module.exports = app;
