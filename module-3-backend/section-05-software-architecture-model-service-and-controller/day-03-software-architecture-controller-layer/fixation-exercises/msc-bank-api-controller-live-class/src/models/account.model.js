// essa camada é responsavel por acessar a model (os dados) de accounts

const connection = require("./connection")

const getAccountById = async (id) => {
  const [[result]] = await connection.execute(`SELECT * FROM accounts WHERE id = ?`, [id]);
  return result;
}

module.exports = {
  getAccountById
}