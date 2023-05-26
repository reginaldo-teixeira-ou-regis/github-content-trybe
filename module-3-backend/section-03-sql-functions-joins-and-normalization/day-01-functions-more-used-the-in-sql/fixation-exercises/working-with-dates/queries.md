-- Exercicios De Fixação: 

-- Usando os comandos que você acabou de aprender, resolva os seguintes desafios:

-- 1. Monte uma query que exiba a diferença de dias entre '2030-01-20' e hoje;
```js
SELECT DATEDIFF('2030-01-20', NOW());
-- ou
SELECT DATEDIFF('2030-01-20', CURRENT_DATE());
```

-- 2. Monte uma query exiba a diferença de horas entre '10:25:45' e '11:00:00';
```js
SELECT TIMEDIFF('10:25:45', '11:00:00');
```