const Joi = require('joi');
const employeeSchema = require('../joi/schemas');

module.exports = (req, res, next) => {
  const team = req.body;
  const employeeArrSchema = Joi.array().items(employeeSchema);
  const { error } = employeeArrSchema.validate(team);
  if (error) {
    return next({ status: 400, message: error.message });
  }
  return res.status(201).json({ message: 'geral agr tem carteira assinada' });
}