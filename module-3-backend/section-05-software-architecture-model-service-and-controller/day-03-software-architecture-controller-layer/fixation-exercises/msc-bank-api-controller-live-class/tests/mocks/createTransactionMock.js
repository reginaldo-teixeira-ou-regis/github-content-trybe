const successTransaction = {
  id: 22,
  from: 2,
  to: 1,
  amount: 1000,
  message: 'Success transfer'
}

const successTransactionService = {
  id: 22,
  to: 1,
  from: 2,
  amount: 1000
}

const badTransaction = {
  status: 400,
  message: 'Input Error'
}

module.exports = {
  successTransaction,
  badTransaction,
  successTransactionService
}