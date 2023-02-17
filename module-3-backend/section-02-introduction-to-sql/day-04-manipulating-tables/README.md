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
```
