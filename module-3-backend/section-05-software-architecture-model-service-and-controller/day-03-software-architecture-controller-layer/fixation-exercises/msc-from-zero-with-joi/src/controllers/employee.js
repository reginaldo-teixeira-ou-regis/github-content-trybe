const employeeService = require('../services/employee');

const create = async (req, res, next) => {
  try {
    const { firstName, lastName, office } = req.body;
    const newEmployee = await employeeService.create({ firstName, lastName, office });
    res.status(201).json(newEmployee);
  } catch (error) {
    next(error);
  }
}

const getById = async (req, res, next) => {
  try {
  const { id } = req.params;
  const employee = await employeeService.getById(id);
  res.status(200).json(employee);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  create,
  getById,
};