-- Para realizar as tarefas do 1 ao 4, restaure o seguinte banco de dados:
```js
-- Exclui o banco de dados caso já exista
DROP SCHEMA IF EXISTS PiecesProviders;

-- Cria o banco PiecesProviders
CREATE SCHEMA PiecesProviders;
USE PiecesProviders;

-- Cria a tabela Pieces
CREATE TABLE Pieces (
  Code INTEGER PRIMARY KEY NOT NULL,
  Name TEXT NOT NULL
);

-- Cria a tabela Providers
CREATE TABLE Providers (
  Code VARCHAR(40) PRIMARY KEY NOT NULL,
  Name TEXT NOT NULL
);

-- Cria a tabela Provides
CREATE TABLE Provides (
  Piece INTEGER,
  FOREIGN KEY (Piece) REFERENCES Pieces (Code),
  Provider VARCHAR(40),
  FOREIGN KEY (Provider) REFERENCES Providers (Code),
  Price INTEGER NOT NULL,
  PRIMARY KEY (Piece , Provider)
);

-- Insere valores na tabela Providers
INSERT INTO Providers(Code, Name)
  VALUES ('HAL', 'Clarke Enterprises'),
    ('RBT', 'Susan Calvin Corp.'),
    ('TNBC', 'Skellington Supplies');

-- Insere valores na tabela Pieces
INSERT INTO Pieces(Code, Name)
  VALUES (1, 'Sprocket'),
    (2, 'Screw'),
    (3, 'Nut'),
    (4, 'Bolt');

-- Insere valores na tabela Provides
INSERT INTO Provides(Piece, Provider, Price)
  VALUES (1, 'HAL', 10),
    (1, 'RBT', 15),
    (2, 'HAL', 20),
    (2, 'RBT', 25),
    (2, 'TNBC', 14),
    (3, 'RBT', 50),
    (3, 'TNBC', 45),
    (4, 'HAL', 5),
    (4, 'RBT', 7);
```
-- Exercicios Bonus: 

-- 1. Escreva uma query para exibir a peça e o preço de tudo que é provido pela empresa RBT;
```js
SELECT Piece, Price FROM PiecesProviders.Provides 
  WHERE Provider = 'RBT';
```

-- 2. Escreva uma query para exibir todas as informações das cinco peças com os maiores preços;
```js
SELECT Piece, Price FROM PiecesProviders.Provides 
  ORDER BY Price DESC 
  LIMIT 5;
```

-- 3. Escreva uma query para exibir o nome das empresas e o preço das quatro peças com os maiores preços, começando a lista a partir do 3º item;
```js
SELECT DISTINCT Provider, Price FROM PiecesProviders.Provides 
  ORDER BY Price DESC 
  LIMIT 4 OFFSET 2;
```

-- 4. Escreva uma query para exibir todas as informações das peças que são providas pela empresa HAL. Ordene o resultado pelos preços das peças de forma decrescente;
```js
SELECT * FROM PiecesProviders.Provides 
  WHERE Provider = 'HAL' 
  ORDER BY Price DESC;
```

-- 5. Escreva uma query para exibir por quantas empresas a peça 1 é provida;
```js
SELECT COUNT(Provider) FROM PiecesProviders.Provides 
  WHERE Piece = 1;
```