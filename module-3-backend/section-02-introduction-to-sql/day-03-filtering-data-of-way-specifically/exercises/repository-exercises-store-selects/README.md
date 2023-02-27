# Boas vindas ao repositório dos exercícios do dia BE 2.3

Para realizar os exercícios, atente-se a cada passo descrito a seguir, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento dos seus exercícios a partir deste repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

# Termos e acordos

Ao iniciar este exercício, você concorda com as diretrizes do Código de Conduta e do Manual da Pessoa Estudante da Trybe.

# Entregáveis

<details>
  <summary><strong>🤷🏽‍♀️ Como entregar</strong></summary><br />

  Para entregar os seus exercícios você deverá criar um *Pull Request* neste repositório.

  Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/fc998c60-386e-46bc-83ca-4269beb17e17/section/fe827a71-3222-4b4d-a66f-ed98e09961af/day/35e03d5e-6341-4a8c-84d1-b4308b2887ef/lesson/573db55d-f451-455d-bdb5-66545668f436) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!
</details>

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

  **MySQL**.

  Você deverá escrever as querys para resolver cada um dos exercícios, dentro do diretório ```src``` você encontrá os arquivos nos quais deverá escreve-las.
  
  O arquivo ```1-challenge.sql``` é referente ao ```Exercício 1```, e assim na sequência.

 ****
</details>

# Orientações específicas destes exercícios


<details>
  <summary><strong>🐳 Rodando os Testes </strong></summary>

    > Rode os serviços `node` e `db` com o comando `docker-compose up -d`.
  - Lembre-se de verificar se há outro container ou serviço rodando na porta (`3306`), se estiver, pare ele ou adapte no arquivo docker-compose.yml a porta mapeado do lado do host no serviço de db.

  > Use o comando `docker exec -it store_app sh`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > Instale as dependências [**Caso existam**] com `npm install`.

  > Rode o comando `npm run test` para rodas todos os testes.

  > Para rodar apenas um exercício rode `npm run test <número do exercício>`, por exemplo: para rodar apenas o exercício 7, você deverá rodar no terminal do container store_app o comando ```npm run test 7```.

  ⚠ Atenção ⚠ O **git** dentro do container não vem configurado com suas credenciais. Faça os commits fora do container, ou configure as suas credenciais do git dentro do container.

  ⚠ Atenção ⚠ Não rode o comando npm audit fix! Ele atualiza várias dependências do exercício, e essa atualização gera conflitos com o avaliador.
</details>

---
# Orientações que você ja conhece :wink:


<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

  1. Clone o repositório

  - `git clone git@github.com:tryber/sd-026-b-exercise-store-selects.git`.
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd sd-026-b-exercise-store-selects`

  2. Instale as dependências [**Caso existam**]

  - `npm install`

  3. Crie uma branch a partir da branch `main`

  - Verifique se você está na branch `main`
    - Exemplo: `git branch`
  - Se você não estiver, mude para a branch `main`
    - Exemplo: `git checkout main`
  - Agora crie uma branch à qual você vai submeter os `commits` do seu exercício
    - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-exercicio`
    - Exemplo: `git checkout -b joaozinho-sd-0x-exercise-express-typescript-1`

  4. Adicione as mudanças ao _stage_ do Git e faça um `commit`

  - Verifique que as mudanças ainda não estão no _stage_
    - Exemplo: `git status` (deve aparecer listada a pasta _joaozinho_ em vermelho)
  - Adicione o novo arquivo ao _stage_ do Git
      - Exemplo:
        - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
        - `git status` (deve aparecer listado o arquivo _joaozinho/README.md_ em verde)
  - Faça o `commit` inicial
      - Exemplo:
        - `git commit -m 'iniciando o exercício x'` (fazendo o primeiro commit)
        - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

  5. Adicione a sua branch com o novo `commit` ao repositório remoto

  - Usando o exemplo anterior: `git push -u origin joaozinho-sd-026-b-exercise-store-selects`

  6. Crie um novo `Pull Request` _(PR)_

  - Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-026-b-exercise-store-selects/pulls)
  - Clique no botão verde _"New pull request"_
  - Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  - Clique no botão verde _"Create pull request"_
  - Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  - **Não se preocupe em preencher mais nada por enquanto!**
  - Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-026-b-exercise-store-selects/pulls) e confira que o seu _Pull Request_ está criado

</details>
<details>
   <summary><strong>🎛 Linter</strong></summary><br />

  Usaremos o [ESLint](https://eslint.org/) para fazer a análise estática do seu código.

  Este exercício já vem com as dependências relacionadas ao _linter_ configuradas nos arquivos `package.json`.

  Para poder rodar o `ESLint` em um exercício basta executar o comando `npm install` dentro do exercício e depois `npm run lint`. Se a análise do `ESLint` encontrar problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

  Você pode também instalar o plugin do `ESLint` no `VSCode`. Para isso, basta fazer o download do [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) e instalá-lo.

  ⚠️ Pull requests com issues de linter não serão avaliadas. Atente-se para resolvê-las antes de finalizar o desenvolvimento! ⚠️

  </details>
  <details>
  <summary><strong>⌨️ Durante o desenvolvimento</strong></summary><br />

  - Faça `commits` das alterações que você fizer no código regularmente


  - Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto


  - Os comandos que você utilizará com mais frequência são:
    1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
    2. `git add` _(para adicionar arquivos ao stage do Git)_
    3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
    4. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
    5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

</details>
<details>
<summary><strong>🤝 Depois de terminar o desenvolvimento (opcional)</strong></summary><br />

Para sinalizar que o seu exercício está pronto para o _"Code Review"_ dos seus colegas, faça o seguinte:

- Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:

  - No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

  - No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;

  - No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-0x`.

Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

</details>

<details>
  <summary><strong>🕵🏿 Revisando um pull request</strong></summary><br />

  Use o conteúdo sobre [Code Review](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/f04cdb21-382e-4588-8950-3b1a29afd2dd/section/b3af2f05-08e5-4b4a-9667-6f5f729c351d/lesson/36268865-fc46-40c7-92bf-cbded9af9006) para te ajudar a revisar os _Pull Requests_.

</details>


----
# Exercícios

---
## Exercício 1

- Vamos lá! Faça uma consulta na tabela ``itens`` que retorne todos os dados em que a coluna ``name`` comece com as letras ``GR``.

<details close>
  <summary>Além disso, as seguintes verificações serão feitas:</summary>

  <br>


    - Deve retornar uma lista com dois itens.

    - Os itens da lista devem ter apenas os campos id e name.

    - O primeiro item deve possuir o campo id com valor 3 e name com valor Grampola.

    - O segundo item deve possuir o campo id com valor 4 e name com valor Grapeta.
</details>

----
## Exercício 2

- Agora, escreva uma query para retornar da tabela ``supplies`` os dados em que a coluna ```item_id``` possua o valor ```2```. Organize o resultado por ordem alfabética de ```supplier_id```.

<details close>
  <summary>Além disso, as seguintes verificações serão feitas:</summary>

  <br>

    - Deve retornar uma lista com três supplies.

    - Os itens da lista devem ter apenas os campos id, item_id, supplier_id e price.

    - O primeiro item deve possuir os campos:
      id com valor 3,
      item_id com valor 2,
      supplier_id com valor CNF,
      price com valor 20.

    - O segundo item deve possuir os campos:
      id com valor 5,
      item_id com valor 2,
      supplier_id com valor MAP,
      price com valor 14.

    - O terceiro item deve possuir os campos:
      id com valor 4,
      item_id com valor 2,
      supplier_id com valor ROB,
      price com valor 25.

</details>

----
## Exercício 3 

- Em seguida, faça uma consulta para exibir ``item_id``, ``price`` e ``supplier_id`` da tabela de suprimentos (supplies) em que o valor de ``supplier_id`` tenha a letra ``N``. 

<details close>
  <summary>Além disso, as seguintes verificações serão feitas:</summary>

  <br>

    - Deve retornar uma lista com quatro suprimentos.

    - Os itens da lista devem ter apenas os campos item_id, price e supplier_id.

    - O primeiro item deve possuir os campos:
      item_id com valor 1,
      price com valor 10, 
      supplier_id com valor CNF.

    - O segundo item deve possuir os campos:
      item_id com valor 2,
      price com valor 20,
      supplier_id com valor CNF.

    - O terceiro item deve possuir os campos:
      item_id com valor 3,
      price com valor 50,
      supplier_id com valor INF.

    - O quarto item deve possuir os campos:
      item_id com valor 4,
      price com valor 5,
      supplier_id com valor CNF.


</details>

----
## Exercício 4 

- Avante, falta pouco! Escreva uma query para exibir todas as informações da tabela ``suppliers`` que são empresas limitadas (LTDA). Ordene esses resultados em ordem alfabética decrescente.

<details close>
  <summary>Além disso, as seguintes verificações serão feitas:</summary>

  <br>

    - Deve retornar uma lista com dois fornecedores.

    - Os itens da lista devem ter apenas os campos id e name.

    - O primeiro item deve possuir os campos:
      id com valor INF
      e name com Infinity Peças LTDA.

    - O segundo item deve possuir os campos:
      id com valor CNF
      e name com Confiauto LTDA.

</details>

----
## Exercício 5

- Agora, faça uma consulta para exibir o número de fornecedores (suppliers) que contém a letra ``F``no código.

<details close>
  <summary>Além disso, as seguintes verificações serão feitas:</summary>

  <br>

    - Deve retornar a quantidade de 2 fornecedores.
</details>

----
## Exercício 6

- Quase lá! Agora escreva uma query para exibir de suprimentos (supplies), itens que custam mais de ``R$15,00`` e menos de ``R$40,00``. Ordene os resultados por ordem crescente.

<details close>
  <summary>Além disso, as seguintes verificações serão feitas:</summary>

  <br>

    - Deve retornar uma lista com três supplies.

    - Os itens da lista devem ter apenas os campos id, item_id, supplier_id e price.

    - O primeiro item deve possuir os campos:
      id com valor 2,
      item_id com valor 1,
      supplier_id com valor ROB,
      price com valor 15.

    - O segundo item deve possuir os campos:
      id com valor 3,
      item_id com valor 2,
      supplier_id com valor CNF,
      price com valor 20.
    
    - O terceiro item deve possuir os campos:
      id com valor 4,
      item_id com valor 2,
      supplier_id com valor ROB,
      price com valor 25 .

</details>

----
## Exercício 7

- Ufa! Por fim, faça uma query para exibir o número de vendas (sales) feitas entre os dias ```15/04/2018``` e ``30/07/2019``..

<details close>
  <summary>Além disso, as seguintes verificações serão feitas:</summary>

  <br>

    - Deve retornar a quantidade de 3 vendas.
</details>
