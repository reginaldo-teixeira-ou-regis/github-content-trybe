-- Exercicios De Fixação: 

-- 1. Quantas senhas temos cadastradas na tabela staff do banco de dados sakila?
```js
SELECT COUNT(password) FROM sakila.staff;
```

-- 2. Quantas pessoas temos no total trabalhando para nossa empresa?
```js
SELECT COUNT(*) FROM sakila.staff;
```
