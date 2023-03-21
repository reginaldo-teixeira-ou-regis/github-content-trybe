const validateTransactionMiddleware = (req, res, next) => {
  try {
    const { to, from, amount } = req.body;
    if (!to) throw { message: 'to is required', statusCode: 400 }
    if (!from) throw { message: 'from is required', statusCode : 400 }
    if (!amount || amount <= 0) throw { message: 'amount is required', statusCode: 400 }
    next()
  }
  catch (err) {
    next(err);
  }
}

module.exports = validateTransactionMiddleware;