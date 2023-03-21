const connection = require('./connection');

const saveTransaction = async (to, from, amount) => {
  connection.execute(
    `INSERT INTO transactions (from_account, to_account, amount)
    VALUES (?, ?, ?)`, [to, from, amount]
  );
}

module.exports = {
  saveTransaction
}