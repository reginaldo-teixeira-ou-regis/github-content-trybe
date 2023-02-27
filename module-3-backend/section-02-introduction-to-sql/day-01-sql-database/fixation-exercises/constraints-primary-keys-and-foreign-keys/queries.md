-- Exercicios De Fixação:

-- Então, tendo esses aprendizados em mente, vamos tentar chegar a algumas conclusões utilizando como exemplo a tabela a seguir:
```js
SELECT address_id, address, address2, district, city_id, postal_code, phone 
  FROM sakila.address;
```
-- 1. Quais constraints a coluna address_id poderia ter? Por quê?
```js
Resposta: A coluna address_id possui a constraint Primary Key para que exista um número identificador único. Além disso, a Primary Key não permite que ela seja nula.
```

-- 2. Qual constraint a coluna city_id tem? Qual é o motivo de a coluna city_id não possuir nomes das cidades?
```js
Resposta: A coluna city_id é do tipo Foreign Key. O motivo é que ela é apenas uma referência para a sua tabela original, e o número que é exibido nessa tabela representa uma Foreign Key. Os nomes estão em outra tabela.
```

-- 3. A coluna address (endereço) possui uma constraint. Qual tipo de constraint seria interessante ser aplicado a ela para que sempre exista um valor na coluna quando uma nova linha for criada?
```js
Resposta: A restrição aplicada na coluna address é a restrição NOT NULL. Dessa maneira, é interessante que a coluna address sempre esteja preenchida em função de ser uma informação crucial para essa tabela, além de a tabela não fazer sentido sem essa informação preenchida.
```

-- Responda utilizando como exemplo essa outra tabela:
```js
SELECT * FROM sakila.city;
```
-- 1. Que tipo de constraint a coluna city_id possui?
```js
Resposta: A coluna city_id possui o tipo Primary Key.
```

-- 2. Qual é o motivo de a coluna country_id não possuir nomes de country (país)? Ela é algum tipo de chave primária ou estrangeira?
```js
Resposta: Isso acontece porque a coluna country_id é apenas uma referência para a sua tabela original, e o número que é exibido nessa tabela representa uma Foreign Key. Caso você queira ver o nome do país, você deve ir até a tabela na qual o country_id é uma Primary Key.
```



-- Responda utilizando como exemplo essa outra tabela:
```js
SELECT film_id, category_id, last_update FROM sakila.film;
```
-- 1. Qual coluna possui uma primary key?
```js
Resposta: A coluna film_id possui uma Primary Key.
```

-- 2. Qual coluna possui uma foreign key?
```js
Resposta: A coluna category_id possui uma Foreign Key.
```