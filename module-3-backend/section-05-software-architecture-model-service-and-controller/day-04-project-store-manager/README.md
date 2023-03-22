<details>
  <summary><strong>🐳 Rodando no Docker vs Localmente</strong></summary>

### 👉 Com Docker

**:warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.**

> :information_source: Rode os serviços `node` e `db` com o comando `docker-compose up -d`.

- Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers;
- Esses serviços irão inicializar um container chamado `store_manager` e outro chamado `store_manager_db`;
- A partir daqui você pode rodar o container `store_manager` via CLI ou abri-lo no VS Code.

> :information_source: Opção 1: Use o comando `docker-compose run --rm node npm test`, ou para acessar o container e executar lá:

> :information_source: Opção 2: Use o comando `docker exec -it store_manager bash` e sigas passos abaixo.

- Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

- **:warning: Atenção:** Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima.

- **:warning: Atenção:** O **git** dentro do container não vem configurado com suas credenciais. Ou faça os commits fora do container, ou configure as suas credenciais do git dentro do container.

- **:warning: Atenção:** Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

- **:warning: Atenção:** Se você se deparar com o erro abaixo, quer dizer que sua aplicação já esta utilizando a `porta 3001`, seja com outro processo do Node.js (que você pode parar com o comando `killall node`) ou algum container! Neste caso você pode parar o container com o comando `docker stop <nome-do-container>`.

![erro na porta 3001](./public/erroDePorta.png)

- ✨ **Dica:** Antes de iniciar qualquer coisa, observe os containers que estão em execução em sua máquina. Para ver os containers em execução basta usar o comando `docker container ls`, caso queira parar o container basta usar o comando `docker stop nomeContainer` e se quiser parar e excluir os containers, basta executar o comando `docker-compose down`

- ✨ **Dica:** A extensão `Remote - Containers` (que estará na seção de extensões recomendadas do VS Code) é indicada para que você possa desenvolver sua aplicação no container Docker direto no VS Code, como você faz com seus arquivos locais.

![sequelize test](./public/remote-container.png)

 <br />

### 👉 Sem Docker

> :information_source: Instale as dependências [**Caso existam**] com `npm install`

- **:warning: Atenção:** Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

- **:warning: Atenção:** Não esqueça de renomear/configurar o arquivo `.env.example` para os testes locais funcionarem.
- **:warning: Atenção:** Para rodar o projeto desta forma, **obrigatoriamente** você deve ter o `Node.js` instalado em seu computador.
- **:warning: Atenção:** A versão do `Node.js` e `NPM` a ser utilizada é `"node": ">=16.0.0"` e `"npm": ">=7.0.0"`, como descrito a chave `engines` no arquivo `package.json`. Idealmente deve-se utilizar o Node.js na `versão 16.14`, a versão na que esse projeto foi testado.

  <br/>

</details>

# Requisitos Obrigatórios do Projeto Store Manager

## 01 - Crie endpoints para listar produtos

- O endpoint para listar produtos deve ser acessível através do caminho (`/products`) e (`/products/:id`);
- Através do caminho `/products`, todos os produtos devem ser retornados;
- Através do caminho `/products/:id`, apenas o produto com o `id` presente na URL deve ser retornado;
- O resultado da listagem deve ser **ordenado** de forma crescente pelo campo `id`;

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

- **[Será validado que é possível listar todos os produtos]**

  - Ao listar usuários com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http `200`:

  ```json
  [
    {
      "id": 1,
      "name": "Martelo de Thor"
    },
    {
      "id": 2,
      "name": "Traje de encolhimento"
    }
    /* ... */
  ]
  ```

- **[Será validado que não é possível listar um produto que não existe]**

  - Se o produto for inexistente o resultado retornado deverá ser conforme exibido abaixo, com um status http `404`:

  ```json
  { "message": "Product not found" }
  ```

- **[Será validado que é possível listar um produto específico com sucesso]**

  - Ao listar um produto com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http `200`:

  ```json
  {
    "id": 1,
    "name": "Martelo de Thor"
  }
  ```

    <br>
  </details>

---

## 02 - Desenvolva testes que cubram no mínimo 5% de linhas e tenha no mínimo 2 funções escritas nas camadas da sua aplicação

- Seus arquivos de teste devem ficar no diretório `tests/unit`, como é descrito em [Para escrever seus próprios arquivos de teste](#para-escrever-seus-próprios-arquivos-de-teste);
- Seus testes da `model` devem fazer mock do banco de dados obrigatoriamente;
- Opcionalmente você pode parar o serviço do `MYSQL` em sua máquina. Para rodar seus teste utilize `npm run test:mocha`;
- Antes de executar os testes da Trybe, seus testes não devem conter erros.

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

- **[Será validado que a cobertura total das linhas e funções dos arquivos de CADA camada `models`, `services` e `controllers` é maior ou igual a 5%. Ou seja, cada uma das camadas tem de ter, ao menos, 5% de cobertura de testes.]**
- **[Será validado que existe um mínimo de 2 funções em CADA camada `models`, `services` e `controllers`.]**

  <br>

</details>

---

## 03 - Crie endpoint para cadastrar produtos

- O endpoint deve ser acessível através do caminho (`/products`);
- Os produtos enviados devem ser salvos na tabela `products` do banco de dados;
- O corpo da requisição deverá seguir o formato abaixo:

```json
{
  "name": "ProdutoX"
}
```

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

- **[Será validado que é possível cadastrar um produto com sucesso]**

  - Se o produto for criado com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http `201`:

  ```json
  {
    "id": 4,
    "name": "ProdutoX"
  }
  ```

    <br>
  </details>

---

## 04 - Crie validações para produtos

- O endpoint de produtos deve ser acessível através do caminho (`/products`);
- Lembre-se, o banco de dados não deve ser acessado nas validações iniciais do corpo da requisição;

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

- **[Será validado que não é possível realizar operações em um produto sem o campo `name`]**

  - Se a requisição não tiver o campo `name`, o resultado retornado deverá ser conforme exibido abaixo, com um status http `400` :

  ```json
  { "message": "\"name\" is required" }
  ```

- **[Será validado que não é possível realizar operações em um produto com o campo `name` menor que 5 caracteres]**

  - Se a requisição não tiver `name` com pelo menos 5 caracteres, o resultado retornado deverá ser conforme exibido abaixo, com um status http `422`

  ```json
  { "message": "\"name\" length must be at least 5 characters long" }
  ```

    <br>
  </details>

---

## 05 - Desenvolva testes que cubram no mínimo 10% de linhas e tenha no mínimo 3 funções escritas nas camadas da sua aplicação

- Seus arquivos de teste devem ficar no diretório `tests/unit`, como é descrito em [Para escrever seus próprios arquivos de teste](#para-escrever-seus-próprios-arquivos-de-teste);
- Seus testes da `model` devem fazer mock do banco de dados obrigatoriamente;
- Opcionalmente você pode parar o serviço do `MYSQL` em sua máquina. Para rodar seus teste utilize `npm run test:mocha`;
- Antes de executar os testes da Trybe, seus testes não devem conter erros.

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

- **[Será validado que a cobertura total das linhas e funções dos arquivos de CADA camada `models`, `services` e `controllers` é maior ou igual a 10%. Ou seja, cada uma das camadas tem de ter, ao menos, 10% de cobertura de testes.]**
- **[Será validado que existe um mínimo de 3 funções em CADA camada `models`, `services` e `controllers`.]**
  <br>

</details>

---

## 06 - Crie endpoint para validar e cadastrar vendas

- O endpoint de vendas deve ser acessível através do caminho (`/sales`);
- As vendas enviadas devem ser salvas nas tabelas `sales` e `sales_products` do banco de dados;
- Deve ser possível cadastrar a venda de vários produtos através da uma mesma requisição;
- O corpo da requisição deverá seguir o formato abaixo:

```json
[
  {
    "productId": 1,
    "quantity": 1
  },
  {
    "productId": 2,
    "quantity": 5
  }
]
```

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

- **[Será validado que não é possível realizar operações em uma venda sem o campo `productId`]**

  - Se algum dos itens da requisição não tiver o campo `productId`, o resultado retornado deverá ser conforme exibido abaixo, com um status http `400`:

  ```json
  { "message": "\"productId\" is required" }
  ```

- **[Será validado que não é possível realizar operações em uma venda sem o campo `quantity`]**

  - Se algum dos itens da requisição não tiver o campo `quantity`, o resultado retornado deverá ser conforme exibido abaixo, com um status http `400` :

  ```json
  { "message": "\"quantity\" is required" }
  ```

- **[Será validado que não é possível realizar operações em uma venda com o campo `quantity` menor ou igual a 0 (Zero)]**

  - Se a requisição tiver algum item em que o campo `quantity` seja menor ou igual a zero, o resultado retornado deverá ser conforme exibido abaixo, com um status http `422`

  ```json
  { "message": "\"quantity\" must be greater than or equal to 1" }
  ```

- **[Será validado que não é possível realizar operações em uma venda com o campo `productId` inexistente, em uma requisição com um único item]**

  - Se o campo `productId` do item da requisição não existir no banco de dados, o resultado retornado deverá ser conforme exibido abaixo, com um status http `404`

  ```json
  { "message": "Product not found" }
  ```

- **[Será validado que não é possível realizar operações em uma venda com o campo `productId` inexistente, em uma requisição com vários items]**

  - Se a requisição tiver algum item cujo campo `productId` não existe no banco de dados, o resultado retornado deverá ser conforme exibido abaixo, com um status http `404`

  ```json
  { "message": "Product not found" }
  ```

- **[Será validado que é possível cadastrar uma venda com sucesso]**

  - Se a venda for criada com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http `201`:

  ```json
  {
    "id": 3,
    "itemsSold": [
      {
        "productId": 1,
        "quantity": 1
      },
      {
        "productId": 2,
        "quantity": 5
      }
    ]
  }
  ```

    <br>
  </details>

> 💬 Em caso de dúvidas, lembre-se de consultar a seção [Dicas](#dicas) e [Diagrama ER, Entidades e Scripts](#diagrama-scripts)

---

## 07 - Desenvolva testes que cubram no mínimo 15% de linhas e tenha no mínimo 4 funções escritas nas camadas da sua aplicação

- Seus arquivos de teste devem ficar no diretório `tests/unit`, como é descrito em [Para escrever seus próprios arquivos de teste](#para-escrever-seus-próprios-arquivos-de-teste);
- Seus testes da `model` devem fazer mock do banco de dados obrigatoriamente;
- Opcionalmente você pode parar o serviço do `MYSQL` em sua máquina. Para rodar seus teste utilize `npm run test:mocha`;
- Antes de executar os testes da Trybe, seus testes não devem conter erros.

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

- **[Será validado que a cobertura total das linhas e funções dos arquivos de CADA camada `models`, `services` e `controllers` é maior ou igual a 15%. Ou seja, cada uma das camadas tem de ter, ao menos, 15% de cobertura de testes.]**
- **[Será validado que existe um mínimo de 4 funções em CADA camada `models`, `services` e `controllers`.]**

  <br>

</details>

---

## 08 - Crie endpoints para listar vendas

- O endpoint para listar vendas deve ser acessível através do caminho (`/sales`) e (`/sales/:id`);
- Através do caminho `/sales`, todas as vendas devem ser retornadas;
- Através do caminho `/sales/:id`, apenas a venda com o `id` presente na URL deve ser retornada;
- o resultado deve ser **ordenado** de forma crescente pelo campo `saleId`, em caso de empate, **ordenar** também de forma crescente pelo campo `productId`;

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

- **[Será validado que é possível listar todas as vendas]**

  - Ao listar vendas com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http `200`:

  ```json
  [
    {
      "saleId": 1,
      "date": "2021-09-09T04:54:29.000Z",
      "productId": 1,
      "quantity": 2
    },
    {
      "saleId": 1,
      "date": "2021-09-09T04:54:54.000Z",
      "productId": 2,
      "quantity": 2
    }

    /* ... */
  ]
  ```

- **[Será validado que não é possível listar uma venda que não existe]**

  - Se a venda for inexistente o resultado retornado deverá ser conforme exibido abaixo, com um status http `404`:

  ```json
  { "message": "Sale not found" }
  ```

- **[Será validado que é possível listar uma venda específica com sucesso]**

  - Ao listar uma venda com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http `200`:

  ```json
  [
    {
      "date": "2021-09-09T04:54:29.000Z",
      "productId": 1,
      "quantity": 2
    },
    {
      "date": "2021-09-09T04:54:54.000Z",
      "productId": 2,
      "quantity": 2
    }

    /* ... */
  ]
  ```

    <br>
  </details>

---

## 09 - Desenvolva testes que cubram no mínimo 20% de linhas e tenha no mínimo 6 funções escritas nas camadas da sua aplicação

- Seus arquivos de teste devem ficar no diretório `tests/unit`, como é descrito em [Para escrever seus próprios arquivos de teste](#para-escrever-seus-próprios-arquivos-de-teste);
- Seus testes da `model` devem fazer mock do banco de dados obrigatoriamente;
- Opcionalmente você pode parar o serviço do `MYSQL` em sua máquina. Para rodar seus teste utilize `npm run test:mocha`;
- Antes de executar os testes da Trybe, seus testes não devem conter erros.

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

- **[Será validado que a cobertura total das linhas e funções dos arquivos de CADA camada `models`, `services` e `controllers` é maior ou igual a 20%. Ou seja, cada uma das camadas tem de ter, ao menos, 20% de cobertura de testes.]**
- **[Será validado que existe um mínimo de 6 funções em CADA camada `models`, `services` e `controllers`.]**
  <br>

</details>

---

## 10 - Crie endpoint para atualizar um produto

- O endpoint deve ser acessível através do caminho (`/products/:id`);
- Apenas o produto com o `id` presente na URL deve ser atualizado;
- O corpo da requisição deve ser validado igual no cadastro;
- O corpo da requisição deverá seguir o formato abaixo:

```json
{
  "name": "Martelo do Batman"
}
```

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

- **[Será validado que não é possível alterar um produto que não existe]**
  - Se o produto for inexistente o resultado retornado deverá ser conforme exibido abaixo, com um status http `404`:

    ```json
      { "message": "Product not found" }
    ```

- **[Será validado que é possível alterar um produto com sucesso]**

  - Se o produto for alterado com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http `200`:

  ```json
  {
    "id": 1,
    "name": "Martelo do Batman"
  }
  ```

    <br>
  </details>

---

## 11 - Desenvolva testes que cubram no mínimo 25% de linhas e tenha no mínimo 7 funções escritas nas camadas da sua aplicação

- Seus arquivos de teste devem ficar no diretório `tests/unit`, como é descrito em [Para escrever seus próprios arquivos de teste](#para-escrever-seus-próprios-arquivos-de-teste);
- Seus testes da `model` devem fazer mock do banco de dados obrigatoriamente;
- Opcionalmente você pode parar o serviço do `MYSQL` em sua máquina. Para rodar seus teste utilize `npm run test:mocha`;
- Antes de executar os testes da Trybe, seus testes não devem conter erros.

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

- **[Será validado que a cobertura total das linhas e funções dos arquivos de CADA camada `models`, `services` e `controllers` é maior ou igual a 25%. Ou seja, cada uma das camadas tem de ter, ao menos, 25% de cobertura de testes.]**
- **[Será validado que existe um mínimo de 7 funções em CADA camada `models`, `services` e `controllers`.]**
  <br>

</details>

---

## 12 - Crie endpoint para deletar um produto

- O endpoint deve ser acessível através do caminho (`/products/:id`);
- Apenas o produto com o `id` presente na URL deve ser deletado;

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

- **[Será validado que não é possível deletar um produto que não existe]**
  - Se o produto for inexistente o resultado retornado deverá ser conforme exibido abaixo, com um status http `404`:

    ```json
      { "message": "Product not found" }
    ```

- **[Será validado que é possível deletar um produto com sucesso]**

  - Se o produto for deletado com sucesso não deve ser retornada nenhuma resposta, apenas um status http `204`;

    <br>
  </details>

> 💬 Em caso de dúvidas, lembre-se de consultar a seção [Diagrama ER, Entidades e Scripts](#diagrama-scripts)

---

# Requisitos Bônus

## 13 - Desenvolva testes que cubram no mínimo 30% de linhas e tenha no mínimo 8 funções escritas nas camadas da sua aplicação

- Seus arquivos de teste devem ficar no diretório `tests/unit`, como é descrito em [Para escrever seus próprios arquivos de teste](#para-escrever-seus-próprios-arquivos-de-teste);
- Seus testes da `model` devem fazer mock do banco de dados obrigatoriamente;
- Opcionalmente você pode parar o serviço do `MYSQL` em sua máquina. Para rodar seus teste utilize `npm run test:mocha`;
- Antes de executar os testes da Trybe, seus testes não devem conter erros.

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

- **[Será validado que a cobertura total das linhas e funções dos arquivos de CADA camada `models`, `services` e `controllers` é maior ou igual a 30%. Ou seja, cada uma das camadas tem de ter, ao menos, 30% de cobertura de testes.]**
- **[Será validado que existe um mínimo de 8 funções em CADA camada `models`, `services` e `controllers`.]**
  <br>

</details>

---

## 14 - Crie endpoint para deletar uma venda

- O endpoint deve ser acessível através do caminho (`/sales/:id`);
- Apenas a venda com o `id` presente na URL deve ser deletado;

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

- **[Será validado que não é possível deletar uma venda que não existe]**
  - Se a venda for inexistente o resultado retornado deverá ser conforme exibido abaixo, com um status http `404`:

    ```json
      { "message": "Sale not found" }
    ```

- **[Será validado que é possível deletar uma venda com sucesso]**

  - Se a venda for deletada com sucesso não deve ser retornada nenhuma resposta, apenas um status http `204`;

    <br>
  </details>

> 💬 Em caso de dúvidas, lembre-se de consultar a seção [Diagrama ER, Entidades e Scripts](#diagrama-scripts)

---

## 15 - Desenvolva testes que cubram no mínimo 35% de linhas e tenha no mínimo 9 funções escritas nas camadas da sua aplicação

- Seus arquivos de teste devem ficar no diretório `tests/unit`, como é descrito em [Para escrever seus próprios arquivos de teste](#para-escrever-seus-próprios-arquivos-de-teste);
- Seus testes da `model` devem fazer mock do banco de dados obrigatoriamente;
- Opcionalmente você pode parar o serviço do `MYSQL` em sua máquina. Para rodar seus teste utilize `npm run test:mocha`;
- Antes de executar os testes da Trybe, seus testes não devem conter erros.

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

- **[Será validado que a cobertura total das linhas e funções dos arquivos de CADA camada `models`, `services` e `controllers` é maior ou igual a 35%. Ou seja, cada uma das camadas tem de ter, ao menos, 35% de cobertura de testes.]**
- **[Será validado que existe um mínimo de 9 funções em CADA camada `models`, `services` e `controllers`.]**
  <br>

</details>

---

## 16 - Crie endpoint para atualizar uma venda

- O endpoint deve ser acessível através do caminho (`/sales/:id`);
- Apenas a venda com o `id` presente na URL deve ser atualizada;
- O corpo da requisição deve ser validado igual no cadastro;
- O corpo da requisição deverá seguir o formato abaixo:

```json
[
  {
    "productId": 1,
    "quantity": 10
  },
  {
    "productId": 2,
    "quantity": 50
  }
]
```

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

- **[Será validado que não é possível alterar uma venda que não existe]**
  - Se a venda for inexistente o resultado retornado deverá ser conforme exibido abaixo, com um status http `404`:

    ```json
      { "message": "Sale not found" }
    ```

- **[Será validado que é possível alterar uma venda com sucesso]**

  - Se a venda for alterada com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http `200`:

  ```json
    "saleId": 1,
      "itemsUpdated": [
        {
          "productId": 1,
          "quantity":10
        },
        {
          "productId": 2,
          "quantity":50
        }
      ]
  ```

    <br>
  </details>

---

## 17 - Desenvolva testes que cubram no mínimo 40% de linhas e tenha no mínimo 10 funções escritas nas camadas da sua aplicação

- Seus arquivos de teste devem ficar no diretório `tests/unit`, como é descrito em [Para escrever seus próprios arquivos de teste](#para-escrever-seus-próprios-arquivos-de-teste);
- Seus testes da `model` devem fazer mock do banco de dados obrigatoriamente;
- Opcionalmente você pode parar o serviço do `MYSQL` em sua máquina. Para rodar seus teste utilize `npm run test:mocha`;
- Antes de executar os testes da Trybe, seus testes não devem conter erros.

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

- **[Será validado que a cobertura total das linhas e funções dos arquivos de CADA camada `models`, `services` e `controllers` é maior ou igual a 40%. Ou seja, cada uma das camadas tem de ter, ao menos, 40% de cobertura de testes.]**
- **[Será validado que existe um mínimo de 10 funções em CADA camada `models`, `services` e `controllers`.]**
  <br>

</details>

---

## 18 - Crie endpoint products/search?q=searchTerm

- O endpoint deve ser acessível através do URL `/products/search`;
- O endpoint deve ser capaz de trazer os produtos baseados no `q` do banco de dados, se ele existir;
- Sua aplicação deve ser capaz de retornar um array de produtos que contenham em seu nome termo passado na URL;
- Sua aplicação deve ser capaz de retornar um array vazio caso nenhum nome satisfaça a busca;
- O query params da requisição deverá seguir o formato abaixo:

  ```js
    http://localhost:PORT/products/search?q=Martelo
  ```

<details>
  <summary><strong>Os seguintes pontos serão avaliados</strong></summary>

- **[Será validado que é possível buscar um produto pelo `name`]**

  - Se a buscar for feita com sucesso, o resultado retornado deverá ser conforme exibido abaixo, com um status http `200`:

  ```json
  // GET /products/search?q=Martelo

  [
    {
      "id": 1,
      "name": "Martelo de Thor"
    }
  ]
  ```

- **[Será validado que é possível buscar todos os produtos quando passa a busca vazia]** - Se a buscar for vazia o resultado retornado deverá ser conforme exibido abaixo, com um status http `200`:

  ````json
  // GET /products/search?q=

        [
          {
            "id": 1,
            "name": "Martelo de Thor",
          },
          {
            "id": 2,
            "name": "Traje de encolhimento",
          }
          /* ... */
        ]
      ```


  ````

  </details>

---

## 19 - Desenvolva testes que cubram no mínimo 50% de linhas e tenha no mínimo 10 funções escritas nas camadas da sua aplicação

- Seus arquivos de teste devem ficar no diretório `tests/unit`, como é descrito em [Para escrever seus próprios arquivos de teste](#para-escrever-seus-próprios-arquivos-de-teste);
- Seus testes da `model` devem fazer mock do banco de dados obrigatoriamente;
- Opcionalmente você pode parar o serviço do `MYSQL` em sua máquina. Para rodar seus teste utilize `npm run test:mocha`;
- Antes de executar os testes da Trybe, seus testes não devem conter erros.

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

- **[Será validado que a cobertura total das linhas e funções dos arquivos de CADA camada `models`, `services` e `controllers` é maior ou igual a 50%. Ou seja, cada uma das camadas tem de ter, ao menos, 50% de cobertura de testes.]**
- **[Será validado que existe um mínimo de 10 funções em CADA camada `models`, `services` e `controllers`.]**
  <br>

</details>

---

## 20 - Desenvolva testes que cubram no mínimo 60% de linhas e tenha no mínimo 10 funções escritas nas camadas da sua aplicação

- Seus arquivos de teste devem ficar no diretório `tests/unit`, como é descrito em [Para escrever seus próprios arquivos de teste](#para-escrever-seus-próprios-arquivos-de-teste);
- Seus testes da `model` devem fazer mock do banco de dados obrigatoriamente;
- Opcionalmente você pode parar o serviço do `MYSQL` em sua máquina. Para rodar seus teste utilize `npm run test:mocha`;
- Antes de executar os testes da Trybe, seus testes não devem conter erros.

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

- **[Será validado que a cobertura total das linhas e funções dos arquivos de CADA camada `models`, `services` e `controllers` é maior ou igual a 60%. Ou seja, cada uma das camadas tem de ter, ao menos, 60% de cobertura de testes.]**
- **[Será validado que existe um mínimo de 10 funções em CADA camada `models`, `services` e `controllers`.]**
  <br>

</details>
