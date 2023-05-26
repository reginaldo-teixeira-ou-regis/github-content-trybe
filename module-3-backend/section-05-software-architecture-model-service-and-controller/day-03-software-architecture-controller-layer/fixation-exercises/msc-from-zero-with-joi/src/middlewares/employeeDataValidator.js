const employeeSchema = require('../joi/schemas');

module.exports = (req, res, next) => {
  const { firstName, lastName, office } = req.body;
  const { error } = employeeSchema.validate({ firstName, lastName, office });
  if (error) {
    // console.log(error);
    return res.status(400).json({ message: error.message });
  }
  next()
}