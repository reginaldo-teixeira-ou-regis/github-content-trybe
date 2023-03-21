const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'database',
  user: 'root',
  password: 'root',
  port: '3306',
  database: 'bank'
});

module.exports = connection;
