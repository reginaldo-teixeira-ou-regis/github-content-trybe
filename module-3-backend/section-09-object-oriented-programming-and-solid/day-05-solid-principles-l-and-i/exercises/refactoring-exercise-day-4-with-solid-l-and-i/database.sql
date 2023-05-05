CREATE DATABASE IF NOT EXISTS solid_database;

USE solid_database;

CREATE TABLE IF NOT EXISTS account (
  id INT AUTO_INCREMENT,
  balance DECIMAL(10, 2) NOT NULL,
  name VARCHAR(100) NOT NULL,
  cpf VARCHAR(30) NOT NULL,
  type VARCHAR(30) NOT NULL,
  limite DECIMAL(10, 2),
  interest_rate DECIMAL(10,2),
  PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS payment_pix (
  id INT AUTO_INCREMENT,
  date_payment DATETIME NOT NULL,
  account_origin_id INT NOT NULL,
  account_destiny_id INT NOT NULL,
  value DECIMAL(10, 2) NOT NULL,
  key_pix VARCHAR(255) NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY payment_pix_account_origin (account_origin_id) REFERENCES account (id),
  FOREIGN KEY payment_pix_account_destiny (account_destiny_id) REFERENCES account (id)
);


INSERT INTO account (id, balance, name, cpf, type, limite) VALUES (1, 1000, "Usuário 1", "111.111.111-11", "corrente", 2000);
INSERT INTO account (id, balance, name, cpf, type, interest_rate) VALUES (2, 1000, "Usuário 2", "222.111.111-11", "poupança", 0.2);