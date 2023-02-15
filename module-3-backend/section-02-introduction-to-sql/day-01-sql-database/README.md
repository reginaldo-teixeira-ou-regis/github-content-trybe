# Day 1 - Contents: 

* What is and what are the `types` of `databases`; 
* `SQL` (Structured Query Language) is the `most used` language to `create`, `search`, `extract` and also `manipulate` data within a `relational database`; 
* How is the `information` (tables) `stored`; 
* `All searches` carried out within a `database` are done in `tables`, where `lines` represent an example, or instance, of what you want to represent, while `columns` describe some aspect of the represented entity; 
* Installing `MySQL Server` with `Docker`; 
* `MySQL` on the `Command Line`; 
* - The `USE` command is used to define the `database reference` that will be `used` in the `query`, for example: 
```js
USE nome_do_banco_de_dados_que_quero_conectar;
-- EX: USE trybe;
```
* - `Another way` to do reference to the database, without having to run the `USE` is in the `database_database.table` format, example: 
```js
SELECT * FROM banco_de_dados.tabela;
-- EX: SELECT * FROM trybe.students;
```
* - To return `all` initialized `tables` on your server `SHOW TABLES`; 
* - To view the `structure of a table`, use the command `DESCRIBE name_of_the_table`, example: `DESCRIBE students`; 
* - To `create a database` we use the command `CREATE DATABASE name_of_database`, example: `CREATE DATABASE trybe`; 
* Installing a `graphic interface` (`MySQL Workbench`); 
* Restoring the `sakila` practice database; 
* Using the `main features` of the `workbench` (`Crash course of the workbench`); 
* 
