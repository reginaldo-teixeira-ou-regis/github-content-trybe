-- Exercicios:

-- Agora vamos abrir o Workbench e fazer uma análise prática do banco de dados sakila, que já deve estar instalado, caso você tenha feito a instalação do MySql Workbench de forma padrão. Caso o banco sakila não esteja disponível, volte até a seção Restaurando o banco de dados de prática sakila e siga as instruções listadas. Com esse banco disponível na sua instalação do Workbench, sua missão agora é tentar finalizar os exercícios a seguir!

-- 1. Descubra como fazer uma pesquisa em qualquer tabela sem utilizar uma linha de código usando o MySql Workbench;
```js
-- Basta clicar com botão direito na tabela e clicar em “select rows - limit 200” O limite vai depender da configuração do workbench.
```

-- 2. Descubra como é possível criar uma tabela sem usar código SQL usando o MySql Workbench;
```js
-- Na barra lateral esquerda, clicar em tables com o botão direito e em seguida clicar em Create Table.
```

-- 3. Feito isso, crie uma tabela com as seguintes restrições:

Nome da tabela: filme

Colunas:

-- * filme_id - primary key, tipo int, incrementa por 1 cada vez que um valor é inserido automaticamente;

-- * descricao - não permite nulos, tipo texto (varchar(100));

-- * ano_lancamento - não permite nulos, tipo int;

-- * nota - permite nulos, tipo int;
```js
-- Após clicar em Create Table:
-- Preencha o nome da tabela;
-- Adicione os campos solicitados com suas devidas restrições;
-- Clique em Apply.
```

-- 4. Analise a tabela city e encontre a tabela à qual a coluna country_id faz referência;
```js
-- Ela faz referência à tabela country.
```

-- 5. Após resolver o exercício anterior, responda: qual tipo de relacionamento a tabela city faz com a tabela country?
```js
-- N:1
```

-- 6. Qual tipo de relacionamento a tabela country faz com a tabela city?
```js
-- 1:N
```

-- 7. Abra tabela por tabela do banco sakila e encontre no mínimo 3 exemplos de um relacionamentos 1:N ou N:1;
```js
-- store -> staff
-- country -> city
-- film -> language
```