-- Para criá-la no seu banco de dados, abra uma nova janela de query no MySQL Workbench e execute o seguinte código:
```js
CREATE DATABASE `Escola`;
CREATE TABLE IF NOT EXISTS Escola.Estudantes (
    `Nome` VARCHAR(7) CHARACTER SET utf8,
    `Idade` INT
);
INSERT INTO Escola.Estudantes VALUES
    ('Rafael', 25),
    ('Amanda', 30),
    ('Roberto', 45),
    ('Carol', 19),
    ('Amanda', 25);
```

-- Feito isso, você terá acesso à tabela Estudantes do banco de dados Escola. Levando em conta a explicação que você acabou de ver, como você montaria uma query para encontrar os seguintes dados?

-- Exercicios De Fixação: 

-- 1. Monte uma query para encontrar pares únicos de nomes e idades;
```js
SELECT DISTINCT Nome, Idade FROM Escola.Estudantes;
```

-- 2. Quantas linhas você encontraria na query anterior?
```js
-- 5 linhas;
```

-- 3. Monte uma query para encontrar somente os nomes únicos;
```js
SELECT DISTINCT Nome FROM Escola.Estudantes;
```

-- 4. Quantas linhas você encontraria na query anterior?
```js
-- 4 linhas;
```

-- 5. Monte uma query para encontrar somente as idades únicas;
```js
SELECT DISTINCT Idade FROM Escola.Estudantes;
```

-- 6. Quantas linhas você encontraria na query anterior?
```js
-- 4 linhas;
```
