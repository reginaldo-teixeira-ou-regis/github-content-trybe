-- Exercicios De Fixação: 

-- 1. Monte uma query que exiba seu nome, sobrenome, cidade natal e idade na tela;
```js
SELECT 'Reginaldo', 'Teixeira', 'Toledo', 37;
```

-- 2. Monte uma query que, além de exibir todas as informações já mencionadas, identifique cada coluna usando o AS, que é chamado de alias na linguagem SQL (alias é como um apelido no português);
```js
SELECT 'Reginaldo' AS Name, 'Teixeira' AS Surname, 'Toledo' AS City, 37 AS Age;
```

-- Exercicios De Fixação Bônus: 

-- 1. Qual é o resultado de 13 * 8 ? Descubra usando apenas o SELECT;
```js
SELECT 13*8;
```

-- 2. Monte uma query que exiba a data e hora atuais. Dê a essa coluna o nome “Data Atual”.
```js
SELECT now() as "Data Atual";
```

-- Vamos agora entrar no banco de dados sakila e encontrar as seguintes informações, montando uma query para cada uma:

-- 3. Escreva uma query que selecione todas as colunas da tabela city;
```js
SELECT * FROM sakila.city;
```

-- 4. Escreva uma query que exiba apenas as colunas first_name e last_name da tabela customer;
```js
SELECT first_name, last_name FROM sakila.customer;
```

-- 5. Escreva uma query que exiba todas as colunas da tabela rental;
```js
SELECT * FROM sakila.rental;
```

-- 6. Escreva uma query que exiba o título, a descrição e a data de lançamento dos filmes registrados na tabela film;
```js
SELECT title, description, release_year FROM sakila.film;
```

-- 7. Utilize o SELECT para explorar todas as tabelas do banco de dados.
```js
SELECT * FROM sakila.table_name;
```
