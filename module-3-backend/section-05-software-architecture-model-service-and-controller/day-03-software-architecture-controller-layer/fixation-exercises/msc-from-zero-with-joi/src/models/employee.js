const connection = require('./connection');

const create = async ({ firstName, lastName, office }) => {
  const query = 'INSERT INTO exercises.employees (first_name, last_name, office) VALUES(?, ?, ?)';
  const [result] = await connection.execute(query, [firstName, lastName, office]);
  return result.insertId;
};

const getById = async (id) => {
  const query = 'SELECT * FROM exercises.employees WHERE id = ?';
  const [[employee]] = await connection.execute(query, [id]);
  return employee;
};

module.exports = {
  create,
  getById,
};