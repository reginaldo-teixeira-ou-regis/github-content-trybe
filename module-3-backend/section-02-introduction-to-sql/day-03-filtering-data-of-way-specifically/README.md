# Day 3 - Contents: 

* With the `WHERE` command we specify the results, example: 
```js
SELECT * FROM sakila.payment
WHERE amount = 0.99 OR amount = 2.99 AND staff_id = 2; 
-- EX: As the `AND` operator has `preference` over the `OR` operator, it is as if the `query` had the following parentheses(executing first): `amount = 0.99 OR (amount = 2.99 AND staff_id = 2)`; 
```
* - It is important to remember "operator's precedence": Parentheses -> Multiplication and Division -> Subtraction and Addition -> NOT -> AND -> OR; 
```js
SELECT * FROM sakila.payment
WHERE (amount = 0.99 OR amount = 2.99) AND staff_id = 2; 
-- EX: Firstly, the `expression inside the parentheses` is evaluated, then the `expression on the right` side, and finally the `AND` compares the results on `both sides` and causes only the results that `satisfy both conditions` to be returned; 
```
* Operators Boolean and Relational: 
```js
-- OPERATOR - (DESCRIPTION)
= (EQUAL)
> (GREATER THAN)
< (SMALLER THAN)
>= (GREATER THAN OR EQUAL)
<= (SMALLER THAN OR EQUAL)
<> (DIFFERENT FROM)
AND (LOGICAL OPERATOR `AND`)
OR (LOGICAL OPERATOR `OR`)
NOT (DENIAL)
IS (COMPARE WITH BOOLEAN VALUES (TRUE, FALSE, NULL))
```
* With the `LIKE` command we create more dynamic searches, example: 
```js
SELECT * FROM sakila.film
WHERE title LIKE '%don'; 
-- EX: Search result -> We found all movies that ending with the character set "don"; 
```
* - `%` (The percentage sign) can represent zero, one or multiple characters; 
* - `_` (The underscore/underscore) represents a single character; 
* Let's see below how to use the sign `%` and the sign `_`: 
```js
SELECT * FROM sakila.film
WHERE title LIKE 'plu%'; 
-- EX: Search result -> We found all movies that start with the character set "plus"; 
```
```js
SELECT * FROM sakila.film
WHERE title LIKE '%plu%'; 
-- EX: Search result -> We found all movies that contain the character set "plus"; 
```
```js
SELECT * FROM sakila.film
WHERE title LIKE 'p%r'; 
-- EX: Search result -> We found all movies that start with the character "p" and end with the character "r"; 
```
```js
SELECT * FROM sakila.film
WHERE title LIKE '_C%'; 
-- EX: Search result -> We found all movies that the second character of the phrase is "c"; 
```
```js
SELECT * FROM sakila.film
WHERE title LIKE '________'; 
-- EX: Search result -> We found all movies that have exactly 8 characters; 
```
```js
SELECT * FROM sakila.film
WHERE title LIKE 'E__%'; 
-- EX: Search result -> We found all movies with at least 3 characters and starting with the character "E"; 
```
* We can use the `IN` and `BETWEEN` operators to encompass a range of results; 
```js
SELECT * FROM sakila.actor
WHERE first_name = 'PENELOPE'
OR first_name = 'NICK'
OR first_name = 'ED'
OR first_name = 'JENNIFER'; 
```
* - There is a `better way` to do the `same search` as above using the `IN` operator: 
```js
SELECT * FROM sakila.actor
WHERE first_name IN ('PENELOPE','NICK','ED','JENNIFER'); 
```
* - We can do the `same process` we did above for `numbers` as well: 
```js
SELECT * FROM sakila.customer
WHERE customer_id IN (1, 2, 3, 4, 5); 
```
* - Another option when we want to `work with ranges` of results is `BETWEEN`; 
* - We can do the `same process` we did above for `numbers` as well: 
```js
-- Note that MySQL includes the starting and ending value in the results
SELECT title, length FROM sakila.film
WHERE length BETWEEN 50 AND 120;
```
* - Using the `BETWEEN` with strings, example: 
```js
SELECT * FROM sakila.language
WHERE name BETWEEN 'Italian' AND 'Mandarin'
ORDER BY name;
```
* - Using the `BETWEEN` with dates, example: 
```js
SELECT rental_id, rental_date FROM sakila.rental
WHERE rental_date
BETWEEN '2005-05-27' AND '2005-07-17';
```
* In `MySQL`, the `DATE` type is part of the `temporal data types`; 
* The `MySQL`, by `default`, uses the `YYYY-MM-DD` (year/month/day) format when storing date values; 
* - `DATE` - It has only date in `YYYY-MM-DD` format in the range of `1001-01-01` until `9999-12-31`; 
* - `DATETIME` - It has date and time, in `YYYY-MM-DD HH:MM:SS` format in the range of `1000-01-01 00:00:00` until `9999-12-31 23:59: 59`; 
* We can find data by date using the function `DATE(column_of_type_date)`, example: 
```js
SELECT * FROM sakila.payment
WHERE DATE(payment_date) = '2005-07-31'; 
-- EX: Search Result: We found all payments for this day, ignoring hours, minutes and seconds; 
```
* The same result of example above, but using the `LIKE` for approximate values, example: 
```js
SELECT * FROM sakila.payment
WHERE payment_date LIKE '2005-07-31%';
-- EX: Search Result: We found all payments for this day, ignoring hours, minutes and seconds; 
```
```js
SELECT * FROM sakila.payment
WHERE payment_date LIKE '2005-08-20 00:30:52';
-- EX: Search result: We found the payments with exact date and time; 
```
* Using `BETWEEN`: 
```js
SELECT *
FROM sakila.payment
WHERE payment_date BETWEEN '2005-05-26 00:00:00' AND '2005-05-27 23:59:59';
-- EX: Search result: We found payments `specifying between` a value `minimum` and a value `maximum` amount for the `date`; 
```
* Selecting only `parts` of a `date`; 
```js
SELECT DATE(payment_date) FROM sakila.payment; -- YYYY-MM-DD
SELECT YEAR(payment_date) FROM sakila.payment; -- YEAR
SELECT MONTH(payment_date) FROM sakila.payment; -- MONTH
SELECT DAY(payment_date) FROM sakila.payment; -- DAY
SELECT HOUR(payment_date) FROM sakila.payment; -- HOUR
SELECT MINUTE(payment_date) FROM sakila.payment; -- MINUTE
SELECT SECOND(payment_date) FROM sakila.payment; -- SECOND
```
