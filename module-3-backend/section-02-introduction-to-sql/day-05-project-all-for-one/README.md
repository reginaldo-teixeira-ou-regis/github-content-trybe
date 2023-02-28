<details>
  <summary><strong>🗒️ Instruções para restaurar o banco de dados `Northwind`</strong></summary><br />

1. Faça o download do arquivo de backup [aqui](northwind.sql) clicando em "Raw", depois clicando com botão direito e selecionando "Salvar como" para salvar o arquivo em seu computador.

2. Abra o arquivo com algum editor de texto e selecione todo o conteúdo do arquivo usando `CTRL-A`.

3. Abra o MySQL Workbench.

4. Abra uma nova janela de query e cole dentro dela todo o conteúdo do arquivo `northwind.sql`.

5. Selecione todo o código com o atalho `CTRL-A` e depois clique no ícone de raio para executar a query.

    ![Restaurando o banco Northwind](images/restore_northwind.png)
6. Aguarde alguns segundos (espere em torno de 30 segundos antes de tentar fazer algo).

7. Clique no botão apontado na imagem a seguir para atualizar a listagem de banco de dados.

    ![Tabelas do banco Northwind](images/refresh_databases.png)
8. Verifique se o banco restaurado possui todas as seguintes tabelas:

    ![Tabelas do banco Northwind](images/northwind.png)
9. Clique com botão direito em cada tabela e selecione "Select Rows" e certifique-se que todas as tabelas possuem registros. Caso tenha alguma faltando, faça o passo a seguir. Caso contrário, pode ir para próxima seção.

10. Caso existam tabelas faltando, drope o banco de dados clicando com o botão direito em cima do banco de dados northwind e selecionando "Drop Schema" e refaça os passos novamente, dessa vez aguardando um tempo maior quando executar o script de restauração.

    ![Drop Schema](images/drop_database.png)

</details>

<details>
  <summary><strong>📑 Instruções para testar suas queries</strong></summary><br />

### Para executar os testes locais com Docker 🐋

- Após ter seguido os passos anteriores do `docker-compose up -d` e `docker exec -it all_for_one bash`, dentro do terminal interativo do container, rode:

```sh
npm test
```

### Para executar os testes locais usando a instalação do MySQL feita na sua máquina 💻

- Para executar localmente os testes é preciso escrever o seguinte no seu terminal:

```sh
MYSQL_USER=<SEU_NOME_DE_PESSOA_USUARIA> MYSQL_PASSWORD=<SUA SENHA> HOSTNAME=<NOME_DO_HOST> PORT=<PORTA> npm test
```

- Não esqueça de substituir os locais indicados com `< >` por suas credenciais:

```sh
MYSQL_USER=root MYSQL_PASSWORD=password HOSTNAME=localhost PORT=3306 npm test
```

### Rodando um teste individualmente

Caso queria rodar um teste específico, basta executar o comando:

  ```sh
  npm test -- -t <NOME_DO_TESTE>
  ```

  Aonde `<NOME_DO_TESTE>` pode ser apenas um trecho do describe do teste.

- Por exemplo, para rodar o teste do requisito 1:

  ```sh
  npm test -- -t req01
  ```

### Dicas e pontos de atenção

- ✨ **Dica:** Variáveis de ambiente definidas na mesma linha do comando valem apenas para aquele comando. Se preferir, você pode exportar as variáveis de ambiente para toda a _sessão_ (todos os comandos até você fechar aquele terminal). Por exemplo:

```sh
export MYSQL_USER=root MYSQL_PASSWORD=password HOSTNAME=localhost PORT=3306
```

> E depois disso você só precisa rodar `npm test` quando for testar os projetos.

- ✨ **Dica:** Caso queira utilizar _Docker_ para rodar os testes localmente, basta executar o comando:

```sh
docker run -p 3306:3306 --name mysql_57 -e MYSQL_ROOT_PASSWORD=1234 -d mysql:5.7 mysqld --default-authentication-plugin=mysql_native_password
```

- Depois de usar o comando acima, agora basta executar os testes digitando no terminal:

```sh
MYSQL_USER=root MYSQL_PASSWORD=1234 HOSTNAME=localhost npm test
```

  <details close>
    <summary>O que está sendo feito na dica acima</summary>
    <br>

    - 👉 flag --name:
    > Define um nome para o nosso _container_: "meu-mysql-5_7".

    - 👉 flag -e:
    > Define a variável de ambiente "MYSQL_ROOT_PASSWORD" com o valor "1234".

    - 👉 flag -d:
    > Define que o container rode em segundo plano.

    - 👉 flag -p:
    > Mapeia uma porta local a uma porta do _container_.

    - 👉 mysql:5.7:
    > Define qual versão da imagem  mySQL queremos, no caso, a 5.7, que é a esperada pelo avaliador.
  </details>

- **:warning: Atenção:** O avaliador espera que a versão do  MySQL seja a 5.7. Em caso de erro nos testes, verifique se essa é a versão que está sendo usada por você.

</details>

  <details>
  <summary><strong>🗣 Nos dê feedbacks sobre o projeto!</strong></summary><br />

Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário.
**Leva menos de 3 minutos!**

[FORMULÁRIO DE AVALIAÇÃO DE PROJETO](https://be-trybe.typeform.com/to/ZTeR4IbH#cohort_hidden=CH26-B&template=betrybe/sd-026-b-mysql-all-for-one)

:warning: **O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?**

</details>

#

# Requisitos Obrigatórios do Projeto All For One

Monte queries para encontrar as informações esperadas pelos desafios.

- **:warning: Atenção:** Não é necessário colocar `USE northwind` ou `SET SQL_SAFE_UPDATES = 0;` no início dos seus arquivos

- **:warning: Atenção:** Os testes são executados em uma cópia do banco de dados, o `northwind_tests`. Por isto as _querys_  devem indicar somente o nome da tabela, e não utilizar o formato `db.table`.

 - Exemplo de query `incorreta` **onde falhará o teste**: SELECT product_name FROM northwind.products;

 - Exemplo de query `correta`: SELECT product_name FROM products;

## Desafios Iniciais

1 - Exiba apenas os nomes dos produtos na tabela `products`.

  ---

2 - Exiba os dados de todas as colunas da tabela `products`.

  ---

3 - Escreva uma query que exiba os valores da coluna que representa a _primary key_ da tabela `products`.

  ---

4 - Conte quantos registros existem na coluna `product_name` da tabela `products`.

  ---

5 - Monte uma query que exiba os dados da tabela `products` a partir do quarto registro até o décimo terceiro.

<details>
  <summary>&nbsp;&nbsp;<strong>👀 Observações técnicas</strong></summary>

- Tanto o quarto quanto o décimo terceiro registros, precisam aparecer na consulta;

- Não use `where` ou `order by`.

  <br />

</details>

  ---

6 - Exiba os dados das colunas `product_name` e `id` da tabela `products` de maneira que os resultados estejam em ordem alfabética dos nomes.

  ---

7 - Mostre apenas os ids dos 5 últimos registros da tabela `products` (a ordenação deve ser baseada na coluna `id`).

  ---

8 - Faça uma consulta na tabela `employees` que retorne o nome completo da pessoa colaboradora (colunas `first_name` e `last_name`) com o nome `full_name` e também a localização completa (colunas `city`, `state_province` e `address`) com o nome `location`.

<details>
  <summary>&nbsp;&nbsp;<strong>👀 Observações técnicas</strong></summary>

- Na primeira coluna, exiba a concatenação de `first_name` e `last_name` com o nome `full_name` separados por um espaço.

- Na segunda coluna, exiba a concatenação de `city`, `state_province` e `address` com o nome `location`.

- A concatenação de `city` e `state_province` deve ser separada por um hífen, e a coluna `address` deve ser separada por uma vírgula e um espaço. Exemplo:

    ```text
      "Seatle-WA, 123 1st Avenue"
    ```

  <br />

</details>

## Desafios sobre filtragem de dados

9 - Mostre todos os valores de `notes` da tabela `purchase_orders` que não são nulos.

  ---

10 - Mostre todos os dados da tabela `purchase_orders` em ordem decrescente, ordenados por `created_by` em que o `created_by` é maior ou igual a 3.

- Ordene também os resultados pelo `id` de forma crescente, como critério de desempate para a ordenação.

  ---

11 - Exiba os dados da coluna `notes` da tabela `purchase_orders` em que seu valor de `Purchase generated based on Order` é maior ou igual a 30 e menor ou igual a 39.

- ✨ Dica: `Purchase generated based on Order` é um valor atribuído à coluna `notes` e não uma coluna.

  ---

12 - Mostre as `submitted_date` de `purchase_orders` em que a `submitted_date` é do dia 26 de abril de 2006.

  ---

13 - Mostre o `supplier_id` das `purchase_orders` em que o `supplier_id` seja 1 ou 3.

  ---

14 - Mostre os resultados da coluna `supplier_id` da tabela `purchase_orders` em que o `supplier_id` seja maior ou igual a 1 e menor ou igual 3.

  ---

15 - Mostre somente as horas (sem os minutos e os segundos) da coluna `submitted_date` de todos registros da tabela `purchase_orders`.

- No resultado, a hora extraída da coluna `submitted_date` deve ser chamada de `submitted_hour`.

  ---

16 - Exiba a `submitted_date` das `purchase_orders` que estão entre `2006-01-26 00:00:00` e `2006-03-31 23:59:59`.

  ---

17 - Mostre os registros das colunas `id` e `supplier_id` das `purchase_orders` em que os `supplier_id` sejam tanto 1, ou 3, ou 5, ou 7.

  ---

18 - Mostre todos os registros de `purchase_orders` que tem o `supplier_id` igual a 3 e `status_id` igual a 2.

  ---

19 - Mostre a quantidade de pedidos que foram feitos na tabela `orders` pelo `employee_id` igual a 5 ou 6, e que foram enviados através do método(coluna) `shipper_id` igual a 2.

- No resultado, a coluna que contém a contagem de pedidos deve ser chamada de `orders_count`.

  ---

## Desafios de manipulação de tabelas

20 - Adicione à tabela `order_details` um registro com `order_id`: 69, `product_id`: 80, `quantity`: 15.0000, `unit_price`: 15.0000, `discount`: 0, `status_id`: 2, `date_allocated`: NULL, `purchase_order_id`: NULL e `inventory_id`: 129.

- ✨ Dica: O `id` deve ser incrementado automaticamente. Para entender melhor isso, você pode consultar o arquivo de criação da tabela (./northwind.sql, na linha 439) [aqui](northwind.sql).

  ---

21 - Adicione com um único `INSERT`, duas linhas à tabela `order_details` com os mesmos dados do requisito 20.

<details>
  <summary>&nbsp;&nbsp;<strong>👀 Observações técnicas</strong></summary>
  
- Esses dados são novamente `order_id`: 69, `product_id`: 80, `quantity`: 15.0000, `unit_price`: 15.0000, `discount`: 0, `status_id`: 2, `date_allocated`: NULL, `purchase_order_id`: NULL e `inventory_id`: 129;

- O `ìd` deve ser incrementado automaticamente.

  <br />

</details>

  ---

22 - Atualize todos os dados da coluna `discount`, na tabela `order_details`, para 15.

⚠️ Para testar localmente, pode ser necessário utilização do SAFE UPDATE, porém **não é necessário adicionar a instrução do SAFE UPDATE no arquivo `desafio22.sql` junto a query**, pois o próprio avaliador irá ajustar isso.

  ---

23 - Atualize os dados da coluna `discount` da tabela `order_details` para 30, onde o valor na coluna `unit_price` seja menor que 10.0000.

- ✨ Dica: Não é necessário utilizar o SAFE UPDATE em sua query.

  ---

24 - Atualize os dados da coluna `discount` da tabela `order_details` para 45, onde o valor na coluna `unit_price` seja maior que 10.0000 e o id seja um número entre 30 e 40.

- ✨ Dica: Não é necessário utilizar o SAFE UPDATE em sua query.

  ---

25 - Delete todos os dados em que a `unit_price` da tabela `order_details` seja menor que 10.0000.

  ---

26 - Delete todos os dados em que a `unit_price` da tabela `order_details` seja maior que 10.0000.

  ---

27 - Delete todos os dados da tabela `order_details`.

---
