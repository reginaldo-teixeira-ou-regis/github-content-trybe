const connection = require('./connection');

const saveTransaction = async (to, from, amount) => {
  const [{insertId:id}] = await connection.execute(
    `INSERT INTO transactions (from_account, to_account, amount)
    VALUES (?, ?, ?)`, [to, from, amount]
  );
  return {
    id,
    to,
    from, 
    amount
  }
}

module.exports = {
  saveTransaction
}