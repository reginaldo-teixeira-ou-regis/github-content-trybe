# Day 3 - Contents: 

* `Database Design` - How to model a database: 
* Identifying `entities`, `attributes` and `relationships`; 
* Building an `entity-relationship diagram`; 
* Creating a database to contain your tables; 
* Creating and modeling tables according to an `ER diagram`; 
* What are the main `data types` in MySQL; 
* What is a primary key and foreign key; 
* Example of `Composite primary key`: 
```js
  DROP SCHEMA IF EXISTS brasil;
  CREATE SCHEMA brasil;
  USE brasil;

  CREATE TABLE cidades(
    cidade VARCHAR(100) NOT NULL,
    estado VARCHAR(10) NOT NULL,
    populacao INTEGER,
    CONSTRAINT PRIMARY KEY(cidade, estado) -- `Composite primary key`
  );

  INSERT INTO cidades(cidade, estado, populacao)
  VALUES('Rio Claro','SP',185421),
    ('Rio Claro','RJ',17216);
```
