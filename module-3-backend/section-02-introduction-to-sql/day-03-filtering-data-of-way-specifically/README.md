# Day 3 - Contents: 

* With the `WHERE` command we specify the results, example: 
```js
SELECT * FROM sakila.payment
WHERE amount = 0.99 OR amount = 2.99 AND staff_id = 2; 
-- EX: As the `AND` operator has `preference` over the `OR` operator, it is as if the `query` had the following parentheses(executing first): `amount = 0.99 OR (amount = 2.99 AND staff_id = 2)`; 
```
* It is important to remember "operator's precedence": Parentheses -> Multiplication and Division -> Subtraction and Addition -> NOT -> AND -> OR; 
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
