const employeeModel = require('../models/employee');

const httpErrGenerator = (status, message) => ({ status, message });

const create = async ({ firstName, lastName, office }) => {
  if (firstName.length <= 1) {
    throw { status: 400, message: 'first precisa ter ao menos 2 caracteres' }
  }
  const id = await employeeModel.create({ firstName, lastName, office });
  return { id, firstName, lastName, office };
};

const getById = async (id) => {
  const employee = await employeeModel.getById(id);
  if (!employee) {
    // throw { status: 404, message: 'Employee not found' };
    throw httpErrGenerator(404, 'Employee not found')
  }
  return employee;
};

module.exports = {
  create,
  getById,
};