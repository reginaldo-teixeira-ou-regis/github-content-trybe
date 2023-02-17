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
* We can `ignore the errors` during insertion using the `INSERT IGNORE`, example: 
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
