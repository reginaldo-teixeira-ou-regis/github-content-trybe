const validateTransactionMiddleware = (req, res, next) => {
  const { to_account, from_account, amount } = req.body;
  if (!to_account) throw { message: 'to is required' }
  if (!from_account) throw { message: 'to is required' }
  if (!amount || amount <= 0) throw { message: 'to is required' }

  next();
}

module.exports = validateTransactionMiddleware;