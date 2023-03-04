# Day 2 - Contents: 

* O que é um JOIN?; 
* How to use the `INNER JOIN`, example: 
```js
SELECT t1.coluna, t2.coluna
FROM tabela1 AS t1
INNER JOIN tabela2 AS t2
ON t1.coluna_em_comum = t2.coluna_em_comum;
```
* Why do we use the `alias` (`AS`)?; 
* Tips on choosing the `alias size`; 
* How to use the `LEFT JOIN` and the `RIGHT JOIN`; 
* What is self-relationship (`SELF JOIN`) and when to use it; 
