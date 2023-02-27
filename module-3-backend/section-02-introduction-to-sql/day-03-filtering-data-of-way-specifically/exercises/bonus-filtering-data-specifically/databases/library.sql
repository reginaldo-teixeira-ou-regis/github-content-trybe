CREATE database IF NOT EXISTS faculdade;

USE faculdade;

CREATE TABLE IF NOT EXISTS biblioteca (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nome` VARCHAR(40) CHARACTER SET utf8,
    `emprestado` VARCHAR(3) CHARACTER SET utf8,
    `quantidade` INT,
    `ano_lancamento` INT,
    `vendas` INT
);

INSERT INTO faculdade.biblioteca(nome, emprestado, quantidade, ano_lancamento, vendas) VALUES
    ('Um Livro do Ano','Nao',5,2019,350),
    ('Novas conquistas novas responsabilidades','Sim',10,2020,1412),
    ('O retorno do Jedi','Nao',6,2019,845),
    ('Um livro qualquer','Nao',13,2020,1337),
    ('Novo livro, novo ano','Sim',3,2021,1200),
    ('Como eliminar bugs','Sim',7,2005,1442),
    ('Padroes de projeto: uma nova abordagem','Nao',10,2023,805),
    ('Mil e uma formas de tomar cafe','Nao',15,2022,737);