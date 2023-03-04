# Day 3 - Contents: 

* `Database Design` - How to model a database: 
* Identifying `entities`, `attributes` and `relationships`; 
* Building an `entity-relationship diagram`; 
* Creating a database to contain your tables; 
* Creating and modeling tables according to an `ER diagram`; 
* What are the main `data types` in MySQL; 
* What is a primary key and foreign key; 
* Examples of `Composite primary key`: 
```js
  DROP SCHEMA IF EXISTS brasil;
  CREATE SCHEMA brasil;
  USE brasil;

  CREATE TABLE cidades(
    cidade VARCHAR(100) NOT NULL,
    estado VARCHAR(10) NOT NULL,
    populacao INTEGER,
    CONSTRAINT PRIMARY KEY(cidade, estado) -- Composite primary key
  );

  INSERT INTO cidades(cidade, estado, populacao)
  VALUES('Rio Claro','SP',185421),
    ('Rio Claro','RJ',17216);
```
```js
-- Há muitas formas de grafia existentes, mas para manter uma padronização e seguirmos a boa prática adotaremos a notação em "snake_case"
-- para construirmos nossos bancos de dados e tabelas.

DROP SCHEMA IF EXISTS trybe_flix;
CREATE SCHEMA trybe_flix;
USE trybe_flix;

-- Primeiro criamos a tabela actor
CREATE TABLE actor(
    actor_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- E a tabela film
CREATE TABLE film(
    film_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- E por fim, a tabela film_actor com a relação N:N

CREATE TABLE film_actor(
  actor_id INTEGER,
  film_id INTEGER,
  CONSTRAINT PRIMARY KEY(actor_id, film_id),
    FOREIGN KEY (actor_id) REFERENCES actor (actor_id),
    FOREIGN KEY (film_id) REFERENCES film (film_id)
);
```
* How to create a `table in MySQL`; 
