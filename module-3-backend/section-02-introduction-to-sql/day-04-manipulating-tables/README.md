# Day 4 - Contents: 

* `Deleting` and `recreating` a database; 
* With the `INSERT` command we can `add data` into tables;
* Important information about the `quotation marks types`; 
* - `Backticks`(``) are used(if it's a `MySQL reserved word` or when the table or column name `contains blanks`) to identify the table and column names; 
* - We can use `Double quotes`("") in values of the `string type`, but it is preferable to use `Single quotes`(''), as it is `most accepted` in most `Database Management Systems`; 
* The `syntax` for inserting data into a `table` is as follows: 
```js
INSERT INTO table_name (column1, column2)
VALUES('column_value1', 'column_value2'); 
```
* Inserting `multiple rows` at once into a table with a `single query`, example: 
```js
INSERT INTO table_name (column1, column2) VALUES
('value_1','value_2'),
('value_3','value_4'),
('value_5','value_6'); 
```
* We can `Ignoring rows/errors existing` during insertion using the `INSERT IGNORE`, example: 
```js
id name
1  Nissim
2  Garrison
3  Benjamin
4  Gloria
Table `people`

INSERT IGNORE INTO people(id, name) VALUES
(4,'Gloria'), -- Without IGNORE, this line would throw an error and the INSERT would not continue.
(5,'Amanda');

-- Searching now, you will see that the duplicate information was not entered.
-- However, the correct data was successfully entered.
SELECT * FROM people;
```
* Inserting `values` into columns with `auto_increment`, example: 
```js
INSERT INTO sakila.actor (first_name, last_name)
VALUES('Marcelo','Santos'); 
-- EX: The `next value` that will be generated for `actor_id` will be the value of the `last registered id more 1`; 
```
* With `INSERT INTO SELECT` we can insert data from `another table`, example: 
```js
INSERT INTO tableA (column1, column2)
    SELECT tableB.column1, tableB.column2
    FROM tableB
    WHERE tableB.column_name <> 'someValue'
    ORDER BY tableB.order_column;
```
* Thus, we would be `extracting` column1 and column2 from tableB and `inserting` them into tableA, according to the `condition` passed in the `WHERE`; 
* It is also possible to use `SELECT * FROM` and `copy` all data from all columns of one `table to another`, but in this situation `tableA and tableB` must have the `same number of columns`, and the types of data of the columns corresponding must be the equal; 
* With this functionality, it's easy to `create temporary tables` for testing or out of necessity, we can `bring`the data from table `sakila.staff` to table `sakila.actor`, for example: 
```js
INSERT INTO sakila.actor (first_name, last_name)
    SELECT first_name, last_name FROM sakila.staff; 
    
                                                                  Table Actor
                                              staff_id first_name last_name      last_update
          Table Staff                           200       THORA     TEMPLE    2006-02-15 04:34:33
staff_id first_name last_name                   201      Marcelo    Santos    2020-01-17 11:06:14
   1        Mike     Hillyer     <-------->     202        Mike     Hillyer   2020-01-17 11:30:32
   2        Jon      Stephens    <-------->     203        Jon     Stephens   2020-01-17 11:30:32
   
-- EX: Result of the `INSERT` into `sakila.actor` from `sakila.staff`;
```
* With the `UPDATE` command we can change data, for example: 
```js                                     
          Table Staff
staff_id first_name last_name             
   4       Ravein     Bezos
-- Attention: The `first_name Ravein` of the `sakila.staff` table was registered with the wrong value; 
```
* We use the below command to correct the miswriting of `first_name` in the `sakila.staff` table: 
```js
UPDATE sakila.staff
SET first_name = 'Rannveig'
WHERE first_name = 'Ravein';

          Table Staff
staff_id first_name last_name             
   4      Rannveig    Bezos
```
* The `general syntax` for doing an `update` is: 
```js                                     
UPDATE table_name
SET property_to_be_changed = 'new value for column'
WHERE some_condition; -- very important to apply the WHERE to not change the entire table!
```
* A curiosity about `UPDATE` and `DELETE` in `MySQL Server` is that, by `default`, there is a setting called `safe updates mode` that will only allow you to run them if they include which `IDs` must be `modified`. So, if you try to make the `query below`, it wouldn't work because it `doesn't include the ID`; 
```js                                     
UPDATE sakila.staff
SET first_name = 'Rannveig'
WHERE first_name = 'Ravein';

-- Attention: To `avoid` this restriction, run the command below in a `query window` within `MySQL Workbench` whenever you open it to `disable` this functionality, before executing the `UPDATE` or `DELETE` commands: 

SET SQL_SAFE_UPDATES = 0;
```
* Changing `more than one column` at the same time, example: 
```js
UPDATE sakila.staff
SET first_name = 'Rannveig', last_name = 'Jordan'
WHERE staff_id = 4;
```
* For `performance` reasons we can do a mass `UPDATE` with only `one update`, example: 
```js
-- Option 1 - Including the list of fixed conditions.
UPDATE sakila.actor
SET first_name = 'JOE'
WHERE actor_id IN (1,2,3);

-- Option 2 - Specifying how each entry will be changed individually.
UPDATE sakila.actor
SET first_name = (
CASE actor_id WHEN 1 THEN 'JOE' -- if actor_id = 1, change first_name to 'JOE'
              WHEN 2 THEN 'DAVIS' -- if actor_id = 2, change first_name to 'DAVIS'
              WHEN 3 THEN 'CAROLINE' -- if actor_id = 3, change first_name to 'CAROLINE'
	      ELSE first_name -- in all other cases, keep the first_name
END);
```
* Doing an `UPDATE sequentially`; 
* If the `ORDER BY` command is `used together` with the `UPDATE` command, the results will be `changed` in the `order` in which they are `found`; 
* If the `LIMIT` command is `used in conjunction` with the `UPDATE` command, a `limit` is imposed on the `number of results` that can be changed; 
* See the `syntax` of `UPDATE` below (values in square `brackets` ([]) are `optional`): 
```js
UPDATE table_name
SET column1 = value1, column2 = value2
[WHERE conditions]
[ORDER BY expression [ ASC | DESC]]
[LIMIT amount_results];

-- Example:
UPDATE sakila.staff
SET password = 'PleaseResetYourPassword123'
WHERE active = 1
ORDER BY last_update
LIMIT 2;
```
* The `--safe-updates` option requires that `mysql` execute the following statement when `connecting to the server`:
```js
SET sql_safe_updates=1, sql_select_limit=1000, max_join_size=1000000; 
```
* - `sql_select_limit`=1000: limits the `SELECT` result set to 1000 rows, unless the statement includes `LIMIT`; 
* - `max_join_size`=1,000,000: causes `SELECT` statements from `multiple tables` to produce an `error` if the server estimates that it must `examine more than 1,000,000 combinations` of rows; 
* You can disable `--safe-updates` using the `SET` command: 
```js
SET SQL_SAFE_UPDATES = 0; 

`Or set` it to a `more convenient mode` for you by `changing` the variable values:

SET sql_safe_updates=1, sql_select_limit=500, max_join_size=10000; 
```
`Deleting data` from a `table` in a basic way, we have the following `syntax`: 
```js
DELETE FROM database.table
WHERE column = 'value'; 
-- The WHERE is optional. However, without it, all rows in the table would be deleted.

* - Example below using the `sakila` database: 

DELETE FROM sakila.film_text
WHERE title = 'ACADEMY DINOSAUR'; 
```
* If there are `relationships between the tables` (`primary key` and `foreign keys`) and there are `restrictions` applied to them, when executing `DELETE` there will be an `action according to the restriction` that was imposed in the creation of ` foreignkey`. These `restrictions` can be the following: 
```js
-- Reject the DELETE command.
ON DELETE NO ACTION;

-- Reject the DELETE command.
ON DELETE RESTRICT;

-- Allows deletion of the parent table records, and sets child table records to NULL.
ON DELETE SET NULL;

-- Delete parent table information and related records.
ON DELETE CASCADE;
```
* - Let's look at a practical example: 
```js
DELETE FROM sakila.actor
WHERE first_name = 'GRACE';

-- EX: The database will `not allow` you to `delete` the actor named “GRACE”; 
-- EX: This happens because the `actor_id` column of the `film_actor` table is a `foreign key` that points to the `actor_id` column in the actor table, and this `foreign key` has the constraint `ON DELETE RESTRICT`; 
```
* - In order to be able to `delete` this actor in actors, we need to `first delete all references` to it in the `sakila.film_actor` table: 
```js
DELETE FROM sakila.film_actor
WHERE actor_id = 7; -- actor_id = 7 is the id of GRACE

-- EX: After `deleting the references`, we can `delete` the actor named “GRACE”: 

DELETE FROM sakila.actor
WHERE first_name = 'GRACE';
```
* DELETE `VS` TRUNCATE: 
* - For `testing` purposes or `necessity`, `TRUNCATE` is faster than `DELETE`; 
* - The only function of the `TRUNCATE` is to `delete all records` from a table, not being possible to specify the `WHERE`, Therefore, `TRUNCATE` can only be used in this scenario: 
```js
TRUNCATE database.table; 
```
* - If you need to `delete conditionally`, using `rules` and `specifications`, always use the `DELETE` command together with the `WHERE`; 
