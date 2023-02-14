# Boas-vindas ao repositório do exercício Docker images e volumes!

Para realizar o exercício, atente-se a cada passo descrito a seguir, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu exercício a partir deste repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

# Termos e acordos

Ao iniciar este exercício, você concorda com as diretrizes do Código de Conduta e do Manual da Pessoa Estudante da Trybe.

# Entregáveis

<details>
  <summary><strong>🤷🏽‍♀️ Como entregar</strong></summary><br />

  Para entregar o seu exercício você deverá criar um *Pull Request* neste repositório.

  Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/course/4d67f5b4-34a6-489f-a205-b6c7dc50fc16/) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!
</details>

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />
  Neste exercício você irá:

  - Criar e subir um container para um servidor Apache

  - Através de um endpoint, exibir uma página estática, disponível a partir da url `http://localhost:4545/missao_trybe.html`.
  *Obs:* O conteúdo (html) da página, está localizado no caminho `./docker/html/missao_trybe.html`, a partir da raiz do projeto.

  - Encontrar as ID dos containers e imagens criadas

  - Excluir os containers e imagens

Para isto, você irá utilizar uma série de comandos do `docker` com diferentes níveis de complexidade.

Cada comando deverá ser escrito em seu próprio arquivo.

Para isto, siga os seguintes passos:

1. Leia o requisito e crie um arquivo chamado `commandN.dc` no diretório `docker-commands`, onde `N` é o número do requisito. Por exemplo:

    ```text
    Requisito 1: ./docker/docker-commands/command01.dc
    Requisito 2: ./docker/docker-commands/command02.dc
    Requisito 3: ./docker/docker-commands/command03.dc
    ```
    **⚠️ É muito importante que os seus arquivos tenham exatamente estes nomes! ⚠️**


2. Escreva neste arquivo, o comando do CLI *(Interface de Linha de Comando)* do Docker, que resolve o requisito. Um exemplo de como vai ficar seu arquivo:

```dc
docker network inspect bridge
```

---

Os arquivos principais do projeto estão na pasta `docker` (localizada na raiz do projeto). Nela estão contidos:

1. Pasta `docker-commands`: onde ficarão os comandos exigidos pelos requisitos;
2. Pasta `html`: onde ficará o arquivo `missao_trybe.html`, responsável por conter a nossa página em html;

**⚠️ Importante: você deve assumir que a pasta `docker` é a pasta raiz para executar os comandos.**
Por exemplo, se você precisa referenciar um caminho em um comando, você deve assumir que sua pasta raiz esta partindo de `./docker`.
Dessa forma, caso você queira executar o comando, antes de rodar os testes, lembre-se de abrir um terminal dentro da pasta `docker` (localizada na raíz do projeto).

</details>

<details>
  <summary><strong>:memo: Habilidades</strong></summary><br />
  Neste exercício, verificamos se você é capaz de:

  - Gerenciar containers e imagens Docker pelo terminal

</details>

# Orientações

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

  1. Clone o repositório

  - Use o comando: `git clone git@github.com:tryber/sd-026-b-exercise-docker-images-volumes.git`.
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd sd-0x-exercise-docker-images-volumes.git`

  1. Instale as dependências

  - `npm install`.

  3. Crie uma branch a partir da branch `main`

  - Verifique que você está na branch `main`
    - Exemplo: `git branch`
  - Se não estiver, mude para a branch `main`
    - Exemplo: `git checkout main`
  - Agora crie uma branch à qual você vai submeter os `commits` do seu exercício
    - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-exercício`
    - Exemplo: `git checkout -b joaozinho-sd-0x-exercise-docker-images-volumes`

  4. Adicione a sua branch com o novo `commit` ao repositório remoto

  - Usando o exemplo anterior: `git push -u origin joaozinho-sd-0x-exercise-docker-images-volumes`

  5. Crie um novo `Pull Request` _(PR)_

  - Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-026-b-exercise-docker-images-volumes/pulls)
  - Clique no botão verde _"New pull request"_
  - Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  - Coloque um título para a sua _Pull Request_
    - Exemplo: _"Cria tela de busca"_
  - Clique no botão verde _"Create pull request"_
  - Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  - **Não se preocupe em preencher mais nada por enquanto!**
  - Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-026-b-exercise-docker-images-volumes/pulls) e confira que o seu _Pull Request_ está criado

</details>

<details>
  <summary><strong>⌨️ Durante o desenvolvimento</strong></summary><br />

  - Faça `commits` das alterações que você fizer no código regularmente

  - Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

  - Os comandos que você utilizará com mais frequência são:
    1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
    2. `git add` _(para adicionar arquivos ao stage do Git)_
    3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
    4. `git push -u origin nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
    5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

</details>

<details>
  <summary><strong>🤝 Depois de terminar o desenvolvimento (opcional)</strong></summary><br />

  Para sinalizar que o seu exercício está pronto para o _"Code Review"_, faça o seguinte:

  - Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:

    - No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

    - No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;

    - No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-0x`.

  Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

</details>

<details>
  <summary><strong>🕵🏿 Revisando um pull request</strong></summary><br />

  Use o conteúdo sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os _Pull Requests_.

</details>

<details>
  <summary><strong>🎛 Linter</strong></summary><br />

  Usaremos o [ESLint](https://eslint.org/) para fazer a análise estática do seu código.

  Este exercício já vem com as dependências relacionadas ao _linter_ configuradas no arquivo `package.json`.

  Para poder rodar o `ESLint` em um exercício basta executar o comando `npm install` dentro do exercício e depois `npm run lint`. Se a análise do `ESLint` encontrar problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

  Você pode também instalar o plugin do `ESLint` no `VSCode`. Para isso, basta fazer o download do [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) e instalá-lo.
</details>

<details>
  <summary><strong>🛠 Testes</strong></summary><br />

⚠ **É necessário ter o Docker instalado corretamente na sua máquina para rodar os testes locais**.

Todos os requisitos do projeto serão testados automaticamente por meio do Jest. Basta executar o comando abaixo:

```bash
npm test
```

⚠ **Atenção:** ⚠
Não utilize a função `.only` ou `.skip` após o describe. Os testes precisam rodar por completo para que o projeto seja avaliado localmente.

</details>

<details>
  <summary><strong>🗂 Compartilhe seu portfólio!</strong></summary><br />

Você sabia que o LinkedIn é a principal rede social profissional e compartilhar o seu aprendizado lá é muito importante para quem deseja construir uma carreira de sucesso? Compartilhe esse projeto no seu LinkedIn, marque o perfil da Trybe (@trybe) e mostre para a sua rede toda a sua evolução.

</details>

# Requisitos

## Comandos docker

⚠ Lembre-se das instruções da seção [Entregáveis](#Entregáveis), especialmente no tópico `O que deverá ser desenvolvido`!

### 1 - Crie um container para manter um servidor httpd:2.4 Apache e vincule sua porta interna

<details>
  <summary>➕ Informações adicionais</summary><br />

O avaliador executará o comando no arquivo `command01.dc`.

#### Dicas
- Dê uma olhada no comando [`run`]( https://docs.docker.com/engine/reference/commandline/run/#:~:text=Mount%20volume%20(%2Dv,t%20%20ubuntu%20pwd ) na própria documentação do Docker. 😉
- Na própria [documentação](https://hub.docker.com/_/httpd#:~:text=Without%20a%20Dockerfile,htdocs/%20httpd%3A2.4) da imagem *httpd*, temos uma dica de como subir o container com arquivo html;
- Procure sempre o significado de cada *flag* na [documentação](https://docs.docker.com/engine/reference/commandline/run/).
- Dê uma olhada na definição do comando [pwd](https://www.ibm.com/docs/pt-br/aix/7.3?topic=p-pwd-command)
- Após executar o container, acesse a página HTML `http://localhost:4545/missao_trybe.html` que está rodando no servidor em seu browser.
- Altere o conteúdo html desta página, e acompanhe as alterações em seu navegador.

#### O que será testado

- O `nome` do container deve ser `site-trybe`;
- O container deve usar a imagem `httpd` na versão `2.4`;
- O `status` do container deve ser `running`;
- A porta deve ser a `4545`;

</details>

### 2 - Obtenha o id do container httpd:2.4

<details>
  <summary>➕ Informações adicionais</summary><br />

O avaliador executará o comando no arquivo `command02.dc`.

#### Observações técnicas

- O teste executará após o requisito 1, considere então, que o container já estará rodando.

#### O que será testado

- A chave `CONTAINER ID` deve ser retornada;
- O container `site-trybe` deve ser retornado;

</details>

### 3 - Obtenha o Mounts através da propriedade Source que deve mostrar o volume desse container no Docker Host

<details>
  <summary>➕ Informações adicionais</summary><br />

O avaliador executará o comando no arquivo `command03.dc`.

#### Dicas
- Dê uma olhada no comando [`inspect`](https://docs.docker.com/engine/reference/commandline/inspect/). 😉
- Você pode usar o nome do container `site-trybe` no lugar da `Image ID`, faça isso, o teste espera que você faça isso.

#### O que será testado

- A chave `Mounts` deve ser retornada;
- A chave `Source` deve ser retornada;
- O valor `Destination`  deve ser `/usr/local/apache2/htdocs`;

</details>

### 4 - Pare o container site-trybe

<details>
  <summary>➕ Informações adicionais</summary><br />

O avaliador executará o comando no arquivo `command04.dc`.

#### Dicas
- Você pode usar o nome do container `site-trybe` no lugar da `Image ID`, faça isso, o teste espera que você faça isso.

#### O que será testado

- O Container `site-trybe` não poderá estar mais em execução.
- O Status do Container deverá ser `Exited`.

</details>

### 5 - Exclua o container site-trybe

<details>
  <summary>➕ Informações adicionais</summary><br />

O avaliador executará os comandos nos arquivos `command05.dc`.

#### Dicas
- Você pode usar o nome do container `site-trybe` no lugar da `Image ID`, faça isso, o teste espera que você faça isso.

#### O que será testado

- O Container `site-trybe` não deverá mais existir.

</details>

### 6 - Obtenha o `IMAGE ID` do repositório httpd

<details>
  <summary>➕ Informações adicionais</summary><br />

O avaliador executará o comando no arquivo `command06.dc`.

#### O que será testado
- A Imagem para o repositório `httpd` deve ser encontrada
- A chave `IMAGE ID` deve ser retornada

</details>

### 7 - Exclua a imagem `httpd:2.4`

<details>
  <summary>➕ Informações adicionais</summary><br />

O avaliador executará o comando no arquivo `command07.dc`.


#### Dicas
- Dê uma olhada no comando [`rmi`](https://docs.docker.com/engine/reference/commandline/rmi/), e como ele remove usando repository:TAG 😉


#### O que será testado
- Que não existe mais a imagem disponível.

</details>
