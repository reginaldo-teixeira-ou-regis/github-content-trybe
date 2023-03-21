const Joi = require('joi');

const employeeSchema = Joi.object({
  firstName: Joi.string().min(2).max(45).required().label('firstName'),
  lastName: Joi.string().min(2).max(45).required().label('lastName'),
  office: Joi.number().min(1).required().label('office'),
}).messages({
  'any.required': 'The filed {{#label}} is required',
  'string.min': '{{#label}} must be at least {{#limit}} characters long AEHOOOOOOO',
});

// const employeeSchema = Joi.object({
//   firstName: Joi.string().min(2).max(45).required(),
//   lastName: Joi.string().min(2).max(45).required(),
//   office: Joi.number().min(1).required(),
// });

module.exports = employeeSchema;