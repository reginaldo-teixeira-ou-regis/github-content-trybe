# Day 2 - Contents: 

* `Query` is the name given to `commands` that you `type` into a `window or command line` with the intention of `interacting` in some way with a `database`; 
* `DDL` (Data Definition Language) are `all the commands` that deal with the `schema`, description and how data should exist in a database: 
* - We use the `CREATE` command to create databases, tables, indexes, views, procedures, functions and triggers; 
* - We use the `ALTER` command to change the structure of any object; 
* - We use the `DROP` command to delete objects; 
* - We use the `TRUNCATE` command to just `empty the data` inside a table but keep it in the database; 
* `DML` (Data Manipulation Language) are used to `store`, `modify`, `search` and `delete` data in a `database` and the `most common commands and uses` in this category are: 
* - The `SELECT` command is used to `fetch data` from a database; 
* - The `INSERT` command inserts data into a table; 
* - The `UPDATE` command changes data within a table; 
* - The `DELETE` command deletes data from a table; 
* `DCL` (Data Control Language) is more focused on `commands that grant rights`, `permissions` and other `types of control` to the database system, such as: 
* - The `GRANT` command grants access to a user; 
* - The `REVOKE` command removes access granted through the `GRANT` command; 
* `TCL` (Transactional Control Language) handles `transactions` within your queries, such as: 
* - With the `COMMIT` command we change the changes from temporary to `permanent` in the database; 
* - With the `ROLLBACK` command we undo all the impact made by a command; 
* - With the `SAVEPOINT` command we define `points` to which a transaction can `go back`. It's a way `to get back to specific points` in your query; 
* - With the `TRANSACTION` command we define where, how and in what scope your `transactions are executed`; 
* We use the `SELECT` command to `generate values` and use the `AS` command to `name your columns`, example: 
```js
SELECT 'Hello, welcome to SQL!'; 
SELECT 10; 
SELECT now(); 
SELECT 20 * 2; 
SELECT 50 / 2; 
SELECT 18 AS age; 
SELECT 2019 AS year; 
SELECT 'Rafael', 'Martins', 25, 'Web Developer'; 
SELECT 'Rafael' AS name, 'Martins' AS 'last name', 25 AS age, 'Web Developer' AS 'Occupation area'; 
```
* We use the `CONCAT` command to `join` two or more columns, example: 
```js
SELECT CONCAT(first_name, last_name) FROM sakila.actor;
Ex: ReginaldoTeixeira (names all together, no spaces)
SELECT CONCAT(first_name, " ", last_name) FROM sakila.actor;
Ex: Reginaldo Teixeira (names separated by spaces)
SELECT CONCAT(first_name, " ", last_name) AS "Full Name" FROM sakila.actor; 
Ex: Reginaldo Teixeira and names this new column to Full Name
```
*
```table
djdedj jdeijiejd deijdijdi
```
