-- Exercicios De Fixação: 

-- Usando os comandos que você acabou de aprender, resolva os seguintes desafios:

-- 1. Faça uma query que exiba a palavra 'trybe' em CAIXA ALTA;
```js
SELECT UCASE('trybe');
```

-- 2. Faça uma query que transforme a frase 'Você já ouviu falar do DuckDuckGo?' em 'Você já ouviu falar do Google?';
```js
SELECT REPLACE('Você já ouviu falar do DuckDuckGo?',
  'Você já ouviu falar do DuckDuckGo?',
  'Você já ouviu falar do Google?');
```

-- 3. Utilizando uma query, encontre quantos caracteres temos em 'Uma frase qualquer';
```js
SELECT CHAR_LENGTH('Uma frase qualquer');
```

-- 4. Extraia e retorne apenas a palavra “JavaScript” da frase 'A linguagem JavaScript está entre as mais usadas';
```js
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);
```

-- 5. Por fim, padronize a string 'RUA NORTE 1500, SÃO PAULO, BRASIL' para que suas informações estejam todas em caixa baixa;
```js
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');
```