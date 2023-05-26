const conn = require('./connection');

const insert = (task) => conn.execute(
  'INSERT INTO tasks (name, description) VALUES (?, ?)',
  [task.name, task.description],
);

const update = (task, id) => conn.execute(
  'UPDATE tasks SET name = ?, description = ? WHERE id = ?',
  [task.name, task.description, id],
);

const remove = (id) => conn.execute('DELETE FROM tasks WHERE id = ?', [id]);

const findAll = () => conn.execute('SELECT * FROM tasks');

const findById = (id) => conn.execute('SELECT * FROM tasks WHERE id = ?', [id]);

module.exports = {
  insert,
  update,
  remove,
  findAll,
  findById,
};