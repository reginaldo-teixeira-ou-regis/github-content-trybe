# Section 10 - Content: 

* [D1] Project - Recipe App(in Group); 

#

<details>
  <summary><strong>🛠 Testes</strong></summary><br />

  <details><summary><strong>Executando testes de requisito :building_construction:</strong></summary><br />
  
  Para o projeto ser validado, todos os testes de comportamento devem passar. É possível testar isso local rodando `npm run cy`. Esse comando roda a suite de testes do Cypress que valida se o fluxo geral e os requisitos funcionais estão funcionando como deveriam. Você pode também executar o comando `npm run cy:open` para ter um resultado visual dos testes executados.

  Esses testes não consideram o layout de maneira geral, mas sim os atributos e informações corretas, então preste atenção nisso! Os testes te darão uma mensagem de erro caso não estejam passando (seja qual for o motivo). 😉

  ⚠️ **Atenção:** Sua aplicação deve estar rodando para o Cypress no terminal poder testar.

  ### Dica: desativando testes

  Para rodar somente um arquivo de teste, você precisa utilizar o comando:

  `npm run cy -- --spec cypress/integration/login_spec.js`

  **Obs**: após o "spec" é preciso acrescentar todo o caminho até o arquivo de testes.

  Para rodar apenas um teste, basta utilizar a função `.only` após o `describe`. Com isso, será possível que apenas um requisito rode localmente e seja avaliado.

  ![image](describe-only.png)
  ![image](only-all-green.png)

  > ⚠️ O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então não se assuste se isso acontecer, ok?
  </details>

  <details><summary><strong>Executando testes de cobertura :open_umbrella:</strong></summary><br />
  Alguns requisitos irão pedir para que você desenvolva testes para sua aplicação. Esses testes serão avaliados através da cobertura de testes.

  É possível verificar o percentual da cobertura de testes com o comando `npm run test-coverage`. 

  Você também pode executar `npm run test-coverage -- --collectCoverageFrom=caminho/da/Pagina` para verificar o percentual de cobertura de testes de cada 'Pagina'. Por exemplo, para verificar a cobertura de testes da página de `Login`, execute o comando `npm run test-coverage -- --collectCoverageFrom=src/pages/Login.js`.

  </details>
</details>

#

# Requisitos

:warning: **PULL REQUESTS COM ERROS DE LINTER NÃO SERÃO AVALIADAS.** :warning:

Nesse projeto, a pessoa que estiver utilizando o app pode procurar uma receita específica, explorar receitas baseado em diferentes critérios, favoritar e fazer as receitas, entre outras funcionalidades.

As telas sofrem variações dependendo do tipo da receita (se é comida ou bebida, no caso).

***Obs: A maneira como as APIs devem ser estruturadas segue os seguintes modelos: https://www.themealdb.com/api.php e https://www.thecocktaildb.com/api.php***

## Testes unitários

### 1 - Desenvolva os testes unitários de maneira que a cobertura seja de, no mínimo, 90%
<br />
<details>
  <summary><strong>Observações técnicas</strong></summary>

  * Neste requisito vamos cobrir a nossa aplicação com testes unitários/integração utilizando a biblioteca [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), aproveite essa oportunidade para colocar em prática o [Desenvolvimento Orientado por Testes](https://blog.betrybe.com/tecnologia/tdd-test-driven-development/)

  * Lembre-se de que no Desenvolvimento Orientado por Testes, você deve escrever os testes junto com o desenvolvimento de novas funcionalidades. Por esse motivo, este requisito só passará no avaliador enquanto sua aplicação estiver com a cobertura de testes desejada. Caso você adicione uma nova funcionalidade e não crie os testes para ela, este requisito pode parar de passar no avaliador.

  * Os testes criados por você não irão influenciar os outros requisitos no avaliador. Você deverá desenvolver seus testes unitários/integração usando a biblioteca React Testing Library, enquanto o avaliador usará a biblioteca [Cypress](https://docs.cypress.io/) para avaliar os requisitos, inclusive os de cobertura.

</details>
<br />
<details>
  <summary><strong>O que será verificado</strong></summary>

  - Verifica a cobertura de testes unitários
</details><br />

---

## Tela de login

> ⚠️ Observações:
>
> - 📁 Para os testes passarem é necessário que o componente seja chamado de `Login.js`.
> - 🔗 A rota usada para essa tela deve ser `/`.

### 2 - Crie todos os elementos que devem respeitar os atributos descritos no protótipo para a tela de login

<details>
  <summary><strong>Observações técnicas</strong></summary>

  * O input de email deve possuir o atributo `data-testid="email-input"`;
  * O input de senha deve possuir o atributo `data-testid="password-input"`;
  * O botão "Enter" deve possuir o atributo `data-testid="login-submit-btn"`.
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se estão corretos os data-testids email-input, password-input e login-submit-btn.
</details><br />

---

### 3 - Desenvolva a tela de maneira que a pessoa consiga escrever seu email no input de email e sua senha no input de senha

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - A possibilidade de escrever o email no input do email.
  - A possibilidade de escrever a senha no input de senha.
</details><br />

---

### 4 - Desenvolva a tela de maneira que o formulário só seja válido após um email válido e uma senha de mais de 6 caracteres serem preenchidos

> Este requisito também inclui testes de cobertura da página `Login.js`.

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * O formulário só fica válido após um email válido e uma senha de mais de 6 caracteres serem preenchidos;
  * Caso o formulário esteja inválido, o botão de submeter deve estar desativado, contendo a propriedade `disabled`;
  * Caso o formulário esteja válido, o botão de submeter deve estar ativado, não contendo a propriedade `disabled`.
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - O botão deve estar desativado se o email for inválido
  - O botão deve estar desativado se a senha deve 6 caracteres ou menos
  - O botão deve estar ativado se o email e a senha forem válidos
  - Verifica a cobertura de 45% da tela de Login
</details><br />

---

### 5 - Após a submissão do formulário, salve no localStorage o e-mail da pessoa usuária na chave `user`

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * Após a submissão, o e-mail de pessoa usuária deve ser salvo em `localStorage` na chave `user` no formato `{ email: email-da-pessoa }`.
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se após a submissão, a chave user está salva em localStorage.
</details>

---

### 6 - Redirecione a pessoa usuária para a tela principal de receitas de comidas após a submissão e validação com sucesso do login

> Este requisito também inclui testes de cobertura da página `Login.js`.

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se a rota muda para a tela principal de receitas de comidas.
  - Verifica a cobertura de 90% da tela de Login.
</details>

---

## Header

> ⚠️ Observação:
>
> - 📁 Para os testes passarem é necessário que o componente seja chamado de `Header.js`.

### 7 - Implemente o header de acordo com a necessidade de cada tela

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * O Header deve ter os seguintes elementos: 
    * Ícone de perfil com o data-testid `profile-top-btn`, que deverá estar sempre presente;
    * Ícone de pesquisa com o data-testid `search-top-btn`, que deverá estar presente somente em alguma páginas (conforme a lista abaixo);
    * Título da página com o data-testid `page-title`, que deverá estar sempre presente.
  * Os ícones podem ser encontrados em `src/images/profileIcon.svg` e em `src/images/searchIcon.svg`.
  * Cada página deverá ter seu próprio título, que será renderizado pelo Header.
  * Todas as rotas serão verificadas, portanto, crie as rotas que ainda não foram criadas.
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Rota "/": **não** possui header
  - Rota "/meals": possui o header com o título "Meals" e os ícones de perfil e pesquisa
  - Rota "/drinks": possui o header com o título "Drinks" e os ícones de perfil e pesquisa
  - Rota "/meals/:id-da-receita": **não** possui header
  - Rota "/drinks/:id-da-receita": **não** possui header
  - Rota "/meals/:id-da-receita/in-progress": **não** possui header
  - Rota "/drinks/:id-da-receita/in-progress": **não** possui header
  - Rota "/profile": possui o header com o título "Profile" e o ícone de perfil, mas **sem** o ícone de pesquisa
  - Rota "/done-recipes": possui o header com o título "Done Recipes" e o ícone de perfil, mas **sem** o ícone de pesquisa
  - Rota "/favorite-recipes": possui o header com o título "Favorite Recipes" e o ícone de perfil, mas **sem** o ícone de pesquisa
</details>

---

### 8 - Redirecione a pessoa usuária para a tela de perfil ao clicar no botão de perfil

> Este requisito também inclui testes de cobertura do componente `Header.js`.

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Após clicar no botão de perfil com o testid `profile-top-btn`, verifica se:
    - A rota muda para a tela de perfil `/profile`
    - O título do header muda para "Profile"
  - Verifica a cobertura de 45% do componente Header.
</details>

---

### 9 - Desenvolva o botão de busca que, ao ser clicado, a barra de busca deve aparecer. O mesmo serve para escondê-la

> Este requisito também inclui testes de cobertura do componente `Header.js`.

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>
  
  * Nesse requisito você deverá apenas implementar a lógica para esconder e mostrar o input de busca. A funcionalidade, dentre outros detalhes da barra de busca só serão implementados no requisito 10!
  * O input de busca que será exibido deve possuir o atributo `data-testid="search-input"`
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>
  
  - Se ao clicar no botão de busca pela primeira vez, a barra de busca aparece.
  - Se ao clicar no botão de busca pela segunda vez, a barra de busca desaparece;
  - Verifica a cobertura de 90% do componente Header
</details>

---

## Barra de busca - Header

> ⚠️ Observação:
>
> - 📁 Para os testes passarem é necessário que o componente seja chamado de `SearchBar.js`.

### 10 - Implemente os elementos da barra de busca respeitando os atributos descritos no protótipo

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * Deve existir os data-testids tanto na barra de busca quanto em todos os radio-buttons.
  * O radio button de busca de ingrediente deve possuir o atributo `data-testid="ingredient-search-radio"`;
  * O radio button de busca por nome deve possuir o atributo `data-testid="name-search-radio"`;
  * O radio button de busca da primeira letra deve possuir o atributo `data-testid="first-letter-search-radio"`.
  * O botão de busca deve possuir o atributo `data-testid="exec-search-btn"`
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se os data-testids estão corretos tanto na barra de busca quanto em todos os radio-buttons.
</details>

---

### 11 - Implemente 3 radio buttons na barra de busca: Ingredient, Name e First letter

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * A barra de busca deve possuir 3 _radio buttons_: `Ingredient`, `Name` e `First letter`. Eles, em conjunto com a `search-input`, devem mudar a forma como serão filtradas as receitas após clicar no botão `Search`.  Os _endpoints_ da API que você deve usar podem ser consultados [aqui para a API de comidas](https://www.themealdb.com/api.php) e [aqui para a API de bebidas](https://www.thecocktaildb.com/api.php).
  * Se o radio selecionado for `Ingredient`, a busca na API é feita corretamente pelo ingrediente. O endpoint utilizado deve ser `https://www.themealdb.com/api/json/v1/1/filter.php?i={ingrediente}`;
  * Se o radio selecionado for `Name`, a busca na API é feita corretamente pelo nome. O endpoint utilizado deve ser `https://www.themealdb.com/api/json/v1/1/search.php?s={nome}`;
  * Se o radio selecionado for `First letter`, a busca na API é feita corretamente pela primeira letra. O endpoint utilizado deve ser `https://www.themealdb.com/api/json/v1/1/search.php?f={primeira-letra}`;
      * Se o radio selecionado for `First letter` e a busca na API for feita com mais de uma letra, deve-se exibir um `alert` com a mensagem "Your search must have only 1 (one) character".
  * :bulb: **Exemplo: Ao selecionar `Ingredient` e buscar por `chicken`, deve-se utilizar o endpoint `https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken`.**

  :bulb: **Atenção:** Utilize `global.alert` para evitar os `warnings` do eslint sobre o uso de `alert` no código.<br />
  :bulb: Observação: Para esse requisito será verificada apenas a tela principal de receitas de comidas.
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se o radio selecionado for Ingredient, a busca na API é feita corretamente pelo ingrediente
  - Se o radio selecionado for Name, a busca na API é feita corretamente pelo nome
  - Se o radio selecionado for First letter, a busca na API é feita corretamente pela primeira letra
  - Se o radio selecionado for First letter e a busca na API for feita com mais de uma letra, deve-se exibir um alert
</details>

---

### 12 - Busque na API de comidas caso a pessoa esteja na página de comidas, e na API de bebidas caso esteja na de bebidas

> Este requisito também inclui testes de cobertura do componente `SearchBar.js`.

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * Na tela de bebidas, se o radio selecionado for `Ingredient`, a busca na API é feita corretamente pelo ingrediente. O endpoint utilizado deve ser `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i={ingrediente}`;
  * Na tela de bebidas, se o radio selecionado for `Name`, a busca na API é feita corretamente pelo nome. O endpoint utilizado deve ser `https://www.thecocktaildb.com/api/json/v1/1/search.php?s={nome}`;
  * Na tela de bebidas, se o radio selecionado for `First letter`, a busca na API é feita corretamente pela primeira letra. O endpoint utilizado deve ser `https://www.thecocktaildb.com/api/json/v1/1/search.php?f={primeira-letra}`;
      * Na tela de bebidas, se o radio selecionado for `First letter` e a busca na API for feita com mais de uma letra, deve-se exibir um `alert` com a mensagem "Your search must have only 1 (one) character".

  :bulb: **Atenção:** Utilize `global.alert` para evitar os `warnings` do eslint sobre o uso de `alert` no código.<br />
  :bulb: Observação: Para esse requisito será verificada apenas a tela principal de receitas de bebidas, pois a de comidas já foi verificada no requisito anterior.
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Na tela de bebidas, se o radio selecionado for Ingredient, a busca na API é feita corretamente pelo ingrediente
  - Na tela de bebidas, se o radio selecionado for Name, a busca na API é feita corretamente pelo nome
  - Na tela de bebidas, se o radio selecionado for First letter, a busca na API é feita corretamente pela primeira letra
  - Na tela de bebidas, se o radio selecionado for First letter e a busca na API for feita com mais de uma letra, deve-se exibir um alert
  - Verifica a cobertura de 45% do componente SearchBar
</details>

---

### 13 - Redirecione para a tela de detalhes da receita caso apenas uma receita seja encontrada, com o ID da mesma na URL

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * Caso apenas uma comida seja encontrada, deve-se ir para sua rota de detalhes (`/meals/:id-da-receita`);
  * Caso apenas uma bebida seja encontrada, deve-se ir para sua rota de detalhes (`/drinks/:id-da-receita`).
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se caso apenas uma comida seja encontrada, deve-se ir para sua rota de detalhes.
  - Se caso apenas uma bebida seja encontrada, deve-se ir para sua rota de detalhes.
</details>

---

### 14 - Caso a busca retorne mais de uma receita, renderize as 12 primeiras encontradas, exibindo a imagem e o nome de cada uma

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * Exiba as 12 primeiras receitas que forem retornadas pela busca.
  * Caso a busca retorne menos do que 12 receitas, exiba todas elas.
  * Cada receita deve ser exibida em um elemento que contenha as suas informações.
  * Exiba a imagem e o nome de cada receita.
  * O elemento que contém cada receita deve ter o `data-testid="${index}-recipe-card"`.
  * A imagem de cada receita deve conter o `data-testid="${index}-card-img"`.
  * A tag com o nome de cada receita deve ter o `data-testid="${index}-card-name"`.
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se caso mais de uma comida seja encontrada, mostrar as 12 primeiras.
  - Se caso mais de uma bebida seja encontrada, mostrar as 12 primeiras.
</details>

---

### 15 - Exiba um `alert` caso nenhuma receita seja encontrada

> Este requisito também inclui testes de cobertura do componente `SearchBar.js`.

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * O alert deve conter o texto "Sorry, we haven't found any recipes for these filters."

  :bulb: **Atenção:** Utilize `global.alert` para evitar os `warnings` do eslint sobre o uso de `alert` no código.<br />
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se caso nenhuma comida seja encontrada o alert deve ser exibido.
  - Se caso nenhuma bebida seja encontrada o alert deve ser exibido.
  - Verifica a cobertura de 90% do componente SearchBar.
</details>

---

## Menu inferior

> ⚠️ Observação:
>
> - 📁 Para os testes passarem é necessário que o componente seja chamado de `Footer.js`.

### 16 - Implemente o menu inferior posicionando-o de forma fixa e contendo 2 ícones: um para comidas e outro para bebidas

> Este requisito também inclui testes de cobertura do componente `Footer.js`.
  
<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * Todos os ícones necessários estão disponíveis na pasta `src/images`;
  * O menu inferior deve ter possuir o atributo `data-testid="footer"`;
  * O elemento que leva para a página de bebidas deve usar o ícone `drinkIcon.svg` e possuir o atributo `data-testid="drinks-bottom-btn"`;
  * O elemento que leva para a página de comidas deve usar o ícone `mealIcon.svg` e possuir o atributo `data-testid="meals-bottom-btn"`;
  * O menu inferior deve ficar fixado sempre ao final da página.
</details>
<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se o menu inferior existe e contém os ícones corretos
  - Se o menu inferior está fixado sempre ao final da página.
  - Verifica a cobertura de 45% do componente Footer.
</details>

---

### 17 - Exiba o menu inferior apenas nas telas indicadas pelo protótipo

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

* Todas as rotas serão verificadas, portanto, crie as rotas que ainda não foram criadas.
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Rota "/": **não** deve ter footer
  - Rota "/meals": deve ter footer
  - Rota "/drinks": deve ter footer
  - Rota "/meals/:id-da-receita": **não** deve ter footer
  - Rota "/drinks/:id-da-receita": **não** deve ter footer
  - Rota "/meals/:id-da-receita/in-progress": **não** deve ter footer
  - Rota "/drinks/:id-da-receita/in-progress": **não** deve ter footer
  - Rota "/profile": deve ter footer
  - Rota "/done-recipes": **não** deve ter footer
  - Rota "/favorite-recipes": **não** deve ter footer
</details>

---

### 18 - Redirecione a pessoa usuária para a tela correta ao clicar em cada ícone no menu inferior

> Este requisito também inclui testes de cobertura do componente `Footer.js`.

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

- Se há o redirecionamento para a lista de bebidas ao clicar no ícone de bebidas;
- Se há o redirecionamento para a lista de comidas ao clicar no ícone de comidas;
- Verifica a cobertura de 90% do componente Footer.
</details>

---

## Tela principal de receitas

> ⚠️ Observações:
>
> - 📁 Para os testes passarem é necessário que o componente seja chamado de `Recipes.js`.
> - 🔗 As rotas usadas para essa tela devem ser `/meals` e `/drinks`.

:bulb: **Dica:** lembre-se de componentizar muito bem os elementos em React nessa tela evitando assim problemas de lógica e de complexidade ;).

### 19 - Carregue as 12 primeiras receitas de comidas ou bebidas, uma em cada card

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * As receitas devem ser carregadas ao inicializar a página.
  * Caso as receitas sejam de comidas, deve-se carregar as 12 primeiras receitas obtidas através do endpoint `https://www.themealdb.com/api/json/v1/1/search.php?s=`
  * Caso as receitas sejam de bebidas, deve-se carregar as 12 primeiras receitas obtidas através do endpoint `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`
  * O card deve ter o `data-testid="${index}-recipe-card"`
  * A foto (`strMealThumb` ou `strDrinkThumb`) deve ter o `data-testid="${index}-card-img"`
  * O nome (`strMeal` ou `strDrink`) deve ter o `data-testid="${index}-card-name"`
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

- A tela tem os data-testids de todos os 12 cards da tela de comidas
- Caso as receitas sejam de comida, deve-se carregar as 12 primeiras receitas
- A tela tem os data-testids de todos os 12 cards da tela de bebidas
- Caso as receitas sejam de bebida, deve-se carregar as 12 primeiras receitas
</details>

---



### 20 - Implemente os botões de categoria para serem utilizados como filtro

> Este requisito também inclui testes de cobertura da página `Recipes.js`.

<details>
  <summary><strong>Observações técnicas</strong></summary>

  * Cada botão deve conter o atributo prefixado `data-testid=${categoryName}-category-filter` e devem ser exibidas apenas as 5 primeiras categorias retornadas da API.
  * Caso as receitas sejam de comida, deve-se exibir as 5 primeiras categorias de comida obtidas por meio do endpoint `https://www.themealdb.com/api/json/v1/1/list.php?c=list`;
  * Caso as receitas sejam de bebida, deve-se exibir as 5 primeiras categorias de bebida obtidas por meio do endpoint `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`.
</details>
<br /><details>
  <summary><strong>O que será verificado</strong></summary>

- Caso as receitas sejam de comida, deve-se exibir as 5 primeiras categorias de comida
- Caso as receitas sejam de bebida, deve-se exibir as 5 primeiras categorias de bebida
- Verifica a cobertura de 45% da tela de Receitas
</details>

---

### 21 - Implemente o filtro das receitas por meio da API ao clicar no filtro de categoria

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * As receitas, filtradas por categorias, devem ser obtidas por meio da API de [comidas](https://www.themealdb.com/api.php) ou [bebidas](https://www.thecocktaildb.com/api.php). Deve-se utilizar para as duas API's os endpoints de `Filter by Category`.
  * Na tela de comidas se a categoria selecionada for `Beef` o endpoint utilizado será `https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef`
  * Na tela de bebidas se a categoria selecionada for `Cocktail` o endpoint utilizado será `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`
  * Além das categorias providas pela API, vamos adicionar também um botão que deve limpar os filtros, retornando novamente todas as receitas. Esse botão deve ter o texto **"All"** e o atributo `data-testid="All-category-filter"`.
  * Caso a categoria retorne apenas um resultado, **NÃO** deve ser feito o redirecionamento para a página de detalhes.
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Caso as receitas sejam de comida e a categoria seja "Beef", deve-se carregar as 12 primeiras receitas da categoria "Beef"
  - Caso as receitas sejam de comida e a categoria seja "Breakfast", deve-se carregar as 12 primeiras receitas da categoria "Breakfast"
  - Caso as receitas sejam de comida e a categoria seja "Chicken", deve-se carregar as 12 primeiras receitas da categoria "Chicken"
  - Caso as receitas sejam de comida e a categoria seja "Dessert", deve-se carregar as 12 primeiras receitas da categoria "Dessert"
  - Caso as receitas sejam de comida e a categoria seja "Goat", deve-se carregar as 12 primeiras receitas da categoria "Goat"
  - Caso as receitas sejam de bebida e a categoria seja "Ordinary Drink", deve-se carregar as 12 primeiras receitas da categoria "Ordinary Drink"
  - Caso as receitas sejam de bebida e a categoria seja "Cocktail", deve-se carregar as 12 primeiras receitas da categoria "Cocktail"
  - Caso as receitas sejam de bebida e a categoria seja "Shake", deve-se carregar as 12 primeiras receitas da categoria "Shake"
  - Caso as receitas sejam de bebida e a categoria seja "Other/Unknown", deve-se carregar as 12 primeiras receitas da categoria "Other/Unknown"
  - Caso as receitas sejam de bebida e a categoria seja "Cocoa", deve-se carregar as 12 primeiras receitas da categoria "Cocoa"
  - Caso as receitas sejam de comida deve existir a opção chamada "All" que limpa os filtros das categorias
  - Caso as receitas sejam de bebida deve existir a opção chamada "All" que limpa os filtros das categorias
</details>

---

### 22 - Implemente o filtro como um toggle, o qual se for selecionado novamente, o app deve retornar as receitas sem nenhum filtro

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Caso as receitas sejam de comida e o filtro seja selecionado novamente, deve-se retornar as 12 primeiras receitas sem filtro.
  - Caso as receitas sejam de bebida e o filtro seja selecionado novamente, deve-se retornar as 12 primeiras receitas sem filtro.
</details>

---

### 23 - Redirecione a pessoa usuária ao clicar no card para a tela de detalhes, que deve mudar a rota e conter o id da receita na URL

 > Este requisito também inclui testes de cobertura da página `Recipes.js`.

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * Caso a receita seja de uma comida, a pessoa deve ser redirecionada para a rota `/meals/:id-da-receita`
  * Caso a receita seja de uma bebida, a pessoa deve ser redirecionada para a rota `/drinks/:id-da-receita`
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Caso as receitas sejam de comida a rota deve mudar para a tela de detalhes da receita
  - Caso as receitas sejam de bebida a rota deve mudar para a tela de detalhes da receita
  - Verifica a cobertura de 90% da tela de Receitas
</details>

---

## Tela de detalhes de uma receita

> ⚠️ Observações:
>
> - 📁 Para os testes passarem é necessário que o componente seja chamado de `RecipeDetails.js`.
> - 🔗 As rotas usadas para essa tela devem ser `/meals/:id-da-receita` e `/drinks/:id-da-receita`.

:bulb: **Dica:** lembre-se de componentizar muito bem os elementos em React nessa tela evitando assim problemas de lógica e de complexidade ;).


### 24 - Realize uma request para a API passando o `id` da receita que deve estar disponível nos parâmetros da URL

<details>
  <summary><strong>Observações técnicas</strong></summary>

  * Para verificar se a requisição para a API de comidas foi realizada, o endpoint utilizado deve ser `https://www.themealdb.com/api/json/v1/1/lookup.php?i={id-da-receita}`;
  * Para verificar se a requisição para a API de bebidas foi realizada, o endpoint utilizado deve ser `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i={id-da-receita}`.
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se a requisição para a API de comidas foi realizada.
  - Se a requisição para a API de bebidas foi realizada.
</details>

---

### 25 - Desenvolva a tela de modo que contenha uma imagem da receita, o título, a categoria em caso de comidas e se é ou não alcoólico em caso de bebidas, uma lista de ingredientes seguidos pelas quantidades, instruções, um vídeo do youtube incorporado e recomendações

<details>
  <summary><strong>Observações técnicas</strong></summary>

  A verificação será feita por meio das receitas retornadas pela API, como por exemplo: o texto dos ingredientes e das instruções, a partir dos atributos data-testids:

  * A foto deve possuir o atributo `data-testid="recipe-photo"`;
  * O título deve possuir o atributo `data-testid="recipe-title"`;
  * O texto da categoria deve possuir o atributo `data-testid="recipe-category"`;
  * Os ingredientes devem possuir o atributo `data-testid="${index}-ingredient-name-and-measure"`;
  * O texto de instruções deve possuir o atributo `data-testid="instructions"`;
  * O vídeo, presente somente na tela de comidas, deve possuir o atributo `data-testid="video"`;
  
  Lembre-se: O vídeo do youtube só deve estar disponível para receitas de comida, visto que não é retornado pela [API de bebidas](https://www.thecocktaildb.com/api.php).
  
  :bulb: Dica: Faça uma busca sobre `how to embed youtube video` veja algumas sugestões de pesquisa para te ajudar na construção do código.

</details>
<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se a tela de comida possui todos os atributos data-testid
  - Se a tela de bebidas possui todos os atributos data-testid
</details>

---

### 26 - Implemente as recomendações. Para receitas de comida, a recomendação deverá ser bebida, já para as receitas de bebida a recomendação deverá ser comida

<details>
  <summary><strong>Observações técnicas</strong></summary>

  * Você deverá realizar as requisições para as APIs de comidas e bebidas, e armazenar os dados, eles serão utilizadas posteriormente no requisito 27 para gerar as recomendações.
  * Na página de comidas realize uma requisição para a API de bebidas, o endpoint utilizado deve ser `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;
  * Na página de bebidas realize uma requisição para a API de comidas, o endpoint utilizado deve ser `https://www.themealdb.com/api/json/v1/1/search.php?s=`.
</details>
<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se na página de comida a requisição para a API de bebidas foi realizada.
  - Se na página de bebidas a requisição para a API de comidas foi realizada.
</details>

---

### 27 - Implemente os 6 cards de recomendação, mostrando apenas 2. O scroll é horizontal, similar a um `carousel`

<details>
  <summary><strong>Observações técnicas</strong></summary>

  * Renderize apenas as 6 receitas recomendadas;
    * Apenas 2 receitas devem ser visíveis, com um scroll horizontal, similar a um `carousel`
  * O card de receitas recomendadas deve possuir o atributo `data-testid="${index}-recommendation-card"`;
    * Dentro do card o nome da receita recomendada deve possuir o atributo `data-testid="${index}-recommendation-title"`;
</details>
<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se são visíveis apenas duas recomendações por vez na tela;
  - Se o scroll do carousel é feito na horizontal;
  - Se existem todas as 6 recomendações na tela de detalhes de uma comida
  - Se existem todas as 6 recomendações na tela de detalhes de uma bebida
</details>

---

### 28 - Desenvolva um botão de nome "Start Recipe" que deve ficar fixo na parte de baixo da tela o tempo todo

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * O botão de iniciar receita deve possuir o atributo `data-testid="start-recipe-btn"`;
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se o botão possui o atributo data-testid.
  - O posicionamento do botão na tela de detalhes de comida.
  - O posicionamento do botão na tela de detalhes de bebida.
</details>

---

### 29 - Implemente a solução de forma que, caso a receita já tenha sido feita, o botão "Start Recipe" desapareça

> Este requisito também inclui testes de cobertura da página `RecipeDetails.js`.

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * Lembre-se que as receitas `finalizadas` anteriormente estão salvas na chave `doneRecipes` assim como indicado na sessão localStorage.
      * A chave `doneRecipes` só será populada pela aplicação quando o botão "Finish Recipe" for implementado, mas não é necessário implementar o botão para que este requisito passe no avaliador!
      * Caso o botão "Finish Recipe" ainda não esteja implementado, você pode utilizar como base a estrutura da chave `doneRecipes` que é informada na sessão `Desenvolvimento > Observações técnicas > LocalStorage` do readme.
      * Você pode usar o próprio avaliador para testar o funcionamento, mas também pode popular manualmente a chave `doneRecipes` e testar manualmente.
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se o botão de iniciar receita não é visível na tela de detalhes de uma comida.
  - Se o botão de iniciar receita não é visível na tela de detalhes de uma bebida.
  - Verifica a cobertura de 45% da tela detalhes de uma receita.
</details>

---

### 30 - Implemente a solução de modo que, caso a receita tenha sido iniciada mas não finalizada, o texto do botão deve ser "Continue Recipe"

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * Lembre-se que as receitas `iniciadas` anteriormente estão salvas na chave `inProgressRecipes` assim como indicado na sessão localStorage.
      * A chave `inProgressRecipes` só será populada pela aplicação no requisito `40`, mas não é necessário implementar o requisito `40` para este requisito passar no avaliador!
      * Caso o requisito `40` ainda não esteja implementado, você pode utilizar como base a estrutura da chave `inProgressRecipes` que é informada na sessão `Desenvolvimento > Observações técnicas > LocalStorage` do readme.
      * Você poderá testar o funcionamento com o próprio avaliador e também pode popular manualmente a chave `inProgressRecipes` para testar manualmente.
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - O botão de "Continue Recipe" na tela de detalhes de uma comida.
  - O botão de "Continue Recipe" na tela de detalhes de uma bebida.
</details>

---

### 31 - Redirecione a pessoa usuária caso o botão "Start Recipe" seja clicado, a rota deve mudar para a tela de receita em progresso

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se redireciona para tela de receita da bebida em progresso.
  - Se redireciona para tela de receita da comida em progresso.
</details>

---

### 32 - Implemente um botão de compartilhar e um de favoritar a receita

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * O botão de compartilhar deve possuir o atributo `data-testid="share-btn"`;
  * O botão de favoritar deve possuir o atributo `data-testid="favorite-btn"`;
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se os botões estão disponíveis na tela de detalhes de uma comida.
  - Se os botões estão disponíveis na tela de detalhes de uma bebida.
</details>

---

### 33 - Implemente a solução de forma que, ao clicar no botão de compartilhar, o link de detalhes da receita deve ser copiado para o clipboard e uma mensagem avisando que o link foi copiado deve aparecer na tela em uma tag HTML

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * O avaliador não irá levar em consideração as mensagens exibidas pelo `global.alert`, você deverá exibir ela no html.
  * O ícone do botão de compartilhar pode ser encontrado em `src/images/shareIcon.svg`.
  * Para esse requisito você precisará usar a biblioteca clipboard-copy. Para mais informações, consulte a [documentação da biblioteca](https://www.npmjs.com/package/clipboard-copy).
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se a mensagem "Link copied!" aparece na tela dentro de uma tag HTML e se o link de detalhes receita da comida foi copiado para o clipboard.
  - Se a mensagem "Link copied!" aparece na tela dentro de uma tag HTML e se o link de detalhes receita da bebida foi copiado para o clipboard.
</details>

---

### 34 - Salve as receitas favoritas no `localStorage` na chave `favoriteRecipes`

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * Lembre-se que as receitas `favoritadas` anteriormente estão salvas na chave `favoriteRecipes` assim como indicado na sessão localStorage.
  * As receitas favoritas devem ser salvas no `localStorage` na chave `favoriteRecipes` no formato `[{ id, type, nationality, category, alcoholicOrNot, name, image }]`.
</details>


<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Verifica se após favoritar a receita de uma comida, ela é salva corretamente no localStorage
  - Verifica se após favoritar a receita de uma bebida, ela é salva corretamente no localStorage
</details>

---

### 35 - Implemente o ícone do coração (favorito) de modo que: deve vir preenchido caso a receita esteja favoritada e vazio caso contrário

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * Os ícones dos botões podem ser encontrados em `src/images/whiteHeartIcon.svg` e em `src/images/blackHeartIcon.svg`, respectivamente.
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se a comida favoritada vem com o coração preenchido.
  - Se a comida não favoritada vem com o coração vazio.
  - Se a bebida favoritada vem com o coração preenchido.
  - Se a bebida não favoritada vem com o coração vazio.
</details>

---

### 36 - Implemente a lógica no botão de favoritar. Caso seja clicado, o ícone do coração deve mudar seu estado atual, caso esteja preenchido deve mudar para vazio e vice-versa

> Este requisito também inclui testes de cobertura da página `RecipeDetails.js`.

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Favorita a comida
  - Desfavorita a comida
  - Favorita a bebida
  - Desfavorita a bebida
  - Verifica a cobertura de 90% da tela detalhes de uma receita
</details>

---



## Tela de receita em progresso

> ⚠️ Observações:
>
> - 📁 Para os testes passarem é necessário que o componente seja chamado de `RecipeInProgress.js`.
> - 🔗 As rotas usadas para essa tela devem ser `/meals/:id-da-receita/in-progress` e `/drinks/:id-da-receita/in-progress`.

:bulb: **Dica:** lembre-se de componentizar muito bem os elementos em React nessa tela, evitando assim problemas de lógica e de complexidade ;).

### 37 - Desenvolva a tela de modo que contenha uma imagem da receita, o título, a categoria em caso de comidas e se é ou não alcoólico em caso de bebidas, uma lista de ingredientes com suas respectivas quantidades e instruções

<details>
  <summary><strong>Observações técnicas</strong></summary>

  Verifica se os atributos data-testid estão presentes na tela:

  * A foto deve possuir o atributo `data-testid="recipe-photo"`;
  * O título deve possuir o atributo `data-testid="recipe-title"`;
  * O botão de compartilhar deve possuir o atributo `data-testid="share-btn"`;
  * O botão de favoritar deve possuir o atributo `data-testid="favorite-btn"`;
  * O texto da categoria deve possuir o atributo `data-testid="recipe-category"`;
  * O elemento de instruções deve possuir o atributo `data-testid="instructions"`;
  * O botão para finalizar a receita deve possuir o atributo `data-testid="finish-recipe-btn"`.
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Os elementos de uma receita de comida.
  - Os elementos de uma receita de bebida.
</details>

---

### 38 - Desenvolva um checkbox para cada item da lista de ingredientes

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>
  Verifica se os atributos data-testid estão presentes na tela com suas respectivas quantidades:
  
  * Os ingredientes deverão ser exibidos em uma label;
    * Cada label deve possuir o atributo `data-testid=${index}-ingredient-step`
    * Dentro de cada label deverá existir um input checkbox.
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se todos os ingredientes estão sendo exibidos corretamente.
  - Se cada ingrediente de uma receita de comida/bebida possui um checkbox.
</details>

---

### 39 - Implemente uma lógica que ao clicar no checkbox de um ingrediente, o nome dele deve ser "riscado" da lista

> Este requisito também inclui testes de cobertura da página `RecipeInProgress.js`.

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>
  
  * Ao clicar no checkbox, o item deve ser riscado mostrando assim que esse passo foi finalizado.
    * `text-decoration: line-through solid rgb(0, 0, 0)`
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se é possível marcar todos os passos da receita de comida.
  - Se é possível marcar todos os passos da receita de bebida.
  - Verifica a cobertura de 45% da tela de receita em progresso.
</details>

---

### 40 - Salve o estado do progresso, que deve ser mantido caso a pessoa atualize a página ou volte para a mesma receita

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>
  
  * Após clicar no checkbox em um dos ingredientes da receita, é esperado que o ingrediente permaneça marcado após a página recarregar. Para isso desenvolva a lógica de verificação de acordo com a chave `inProgressRecipes` no localStorage.
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se salva o progresso de uma receita de comida em andamento.
  - Se salva o progresso de uma receita de bebida em andamento.
</details>

---

### 41 - Desenvolva a lógica de favoritar e compartilhar. A lógica da tela de detalhes de uma receita se aplica aqui

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se os botões estão disponíveis na tela de detalhes de uma comida.
  - Se os botões estão disponíveis na tela de detalhes de uma bebida.
  - A mensagem "Link copied!" e se o link da receita da comida foi copiado para o clipboard.
  - Verifica a mensagem "Link copied!" e se o link da receita da bebida foi copiado para o clipboard.
  - Verifica comida favoritada.
  - Verifica comida não favoritada.
  - Verifica bebida favoritada.
  - Verifica bebida não favoritada.
  - Favorita comida.
  - Desfavorita comida.
  - Favorita bebida.
  - Desfavorita bebida.
  - Favorita receita de uma comida.
  - Favorita receita de uma bebida.
</details>

---

### 42 - Implemente a solução de modo que o botão de finalizar receita ("Finish Recipe") só pode estar habilitado quando todos os ingredientes estiverem _"checkados"_ (marcados)

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>
  
  * O botão deve ficar desabilitado enquanto todos os checkboxes não forem marcados. 
  * O botão deve ficar fixo na parte de baixo da tela o tempo todo, semelhante ao botão de "Start Recipe".
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se o botão para finalizar está desabilitado em receitas de comidas.
  - Se o botão para finalizar está desabilitado em receitas de bebidas.
  - Se o botão para finalizar está habilitado em receitas de comidas.
  - Se o botão para finalizar está habilitado em receitas de bebidas.
</details>

---

### 43 - Redirecione a pessoa usuária após clicar no botão de finalizar receita ("Finish Recipe"), para a página de receitas feitas, cuja rota deve ser `/done-recipes`
 
> Este requisito também inclui testes de cobertura da página `RecipeInProgress.js`.

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se redireciona após concluir uma receita de comida.
  - Se redireciona após concluir uma receita de bebida.
  - Se a receita é adicionada no localStorage, na chave `doneRecipes`, quando o botão "Finish Recipe" é clicado.
  - Verifica a cobertura de 90% da tela de receita em progresso.
</details>

---

## Tela de receitas feitas

> ⚠️ Observações:
>
> - 📁 Para os testes passarem é necessário que o componente seja chamado de `DoneRecipes.js`.
> - 🔗 A rota usada para essa tela deve ser `/done-recipes`.

### 44 - Implemente os elementos da tela de receitas feitas respeitando os atributos descritos no protótipo

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  > Obs: Lembre-se que as receitas feitas estão salvas no `localStorage` na chave `doneRecipes`, leia a seção `localStorage` para mais detalhes.

  * Todos os data-testids estão presentes:
    * O botão de filtro `All` deve ter o atributo `data-testid="filter-by-all-btn"`;
    * O botão de filtro `Meals` deve ter o atributo `data-testid="filter-by-meal-btn"`;
    * O botão de `Drinks` deve ter o atributo `data-testid="filter-by-drink-btn"`;
    * A imagem do card de receita deve ter o atributo `data-testid="${index}-horizontal-image"`;
    * O texto da categoria da receita deve ter o atributo `data-testid="${index}-horizontal-top-text"`;
    * O texto do nome da receita deve ter o atributo `data-testid="${index}-horizontal-name"`;
    * O texto da data que a receita foi feita deve ter o atributo `data-testid="${index}-horizontal-done-date"`;
    * O elemento de compartilhar a receita deve ter o atributo `data-testid="${index}-horizontal-share-btn"`;
    * As `tags` da receita devem possuir o atributo `data-testid=${index}-${tagName}-horizontal-tag`;
</details>
<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se todos os data-testids estão disponíveis.
</details>

---

### 45 - Desenvolva a tela de modo que, caso a receita do card seja uma comida, ela deve possuir: a foto da receita, nome, categoria, nacionalidade, a data em que a pessoa fez a receita, as 2 primeiras tags retornadas pela API e um botão de compartilhar

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * A nacionalidade e a categoria devem ser exibidas no elemento com o atributo `data-testid="${index}-horizontal-top-text"`.
    * O texto deverá estar neste formato: `${nationality} - ${category}`
  * O ícone do botão de compartilhar pode ser encontrado em `src/images/shareIcon.svg`.
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se o card possui os atributos de uma comida:
    - foto da receita;
    - nome;
    - categoria e nacionalidade;
    - a data que a receita foi feita;
    - 2 primeiras tags retornadas pela API;
    - botão de compartilhar.
</details>

---

### 46 - Desenvolva a tela de maneira que, caso a receita do card seja uma bebida, ela deve possuir: a foto da receita, o nome, se é alcoólica, a data em que a pessoa fez a receita e um botão de compartilhar

> Este requisito também inclui testes de cobertura da página `DoneRecipes.js`.

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>
  
  * A informação se a bebida é alcoólica deve ser exibida no elemento com o atributo `data-testid="${index}-horizontal-top-text"`. 
  * O ícone do botão de compartilhar pode ser encontrado em `src/images/shareIcon.svg`.
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se o card possui os atributos corretos de uma bebida:
    - foto da receita;
    - nome;
    - se é alcoólica;
    - a data que a receita foi feita;
    - botão de compartilhar.
  - Verifica a cobertura de 45% da Tela de receitas feitas
</details>

---

### 47 - Desenvolva a solução de modo que o botão de compartilhar deve copiar a URL da tela de detalhes da receita para o clipboard

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Ao clicar no botão de compartilhar deve aparecer a mensagem "Link copied!";
  - Se a URL da tela de detalhes da receita é copiada para o clipboard.
</details>

---

### 48 - Implemente 2 botões que filtram as receitas por comida ou bebida e um terceiro que remove todos os filtros

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * Os nomes dos botões devem ser "Meals", "Drinks" e "All", respectivamente.
  * Ao clicar no botão "Meals", as receitas devem ser filtradas por comidas;
  * Ao clicar no botão "Drinks", as receitas devem ser filtradas por bebidas;
  * Ao clicar no botão "All", o filtro deve ser removido.
</details>
<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se ao clicar no botão "Meals", as receitas são filtradas por comidas;
  - Se ao clicar no botão "Drinks", as receitas são filtradas por bebidas;
  - Se ao clicar no botão "All", o filtro  é removido.
</details>

---

### 49 - Redirecione para a tela de detalhes da receita caso seja clicado na foto ou no nome da receita

> Este requisito também inclui testes de cobertura da página `DoneRecipes.js`.

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se ao clicar na foto da receita, a rota  muda para a tela de detalhes daquela receita;
  - Se ao clicar no nome da receita, a rota muda para a tela de detalhes daquela receita;
  - Verifica a cobertura de 90% da Tela de receitas feitas.
</details>

---

## Tela de receitas favoritas

> ⚠️ Observações:
>
> - 📁 Para os testes passarem é necessário que o componente seja chamado de `FavoriteRecipes.js`.
> - 🔗 A rota usada para essa tela deve ser `/favorite-recipes`.

### 50 - Implemente os elementos da tela de receitas favoritas (cumulativo com os atributos em comum com a tela de receitas feitas), respeitando os atributos descritos no protótipo

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  > Obs: Lembre-se que as receitas feitas estão salvas no `localStorage` na chave `favoriteRecipes`, leia a seção `localStorage` para mais detalhes.

    * Todos os data-testids estão presentes:
    * O botão de filtro `All` deve ter o atributo `data-testid="filter-by-all-btn"`;
    * O botão de filtro `Meals` deve ter o atributo `data-testid="filter-by-meal-btn"`;
    * O botão de `Drinks` deve ter o atributo `data-testid="filter-by-drink-btn"`;
    * A imagem do card de receita deve ter o atributo `data-testid="${index}-horizontal-image"`;
    * O texto da categoria da receita deve ter o atributo `data-testid="${index}-horizontal-top-text"`;
    * O texto do nome da receita deve ter o atributo `data-testid="${index}-horizontal-name"`;
    * O elemento de compartilhar a receita deve ter o atributo `data-testid="${index}-horizontal-share-btn"`;
    * O elemento de favoritar a receita deve ter o atributo `data-testid="${index}-horizontal-favorite-btn"`;

</details>


<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se todos os data-testids estão disponíveis.
</details>

---

### 51 - Desenvolva a tela de modo que, caso a receita do card seja uma comida, ela deve possuir: a foto da receita,  nome, categoria, nacionalidade, um botão de compartilhar e um de "desfavoritar"

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>
  
  * A nacionalidade e a categoria devem ser exibidas no elemento com o atributo `data-testid="${index}-horizontal-top-text"`.
    * O texto deverá estar neste formato: `${nationality} - ${category}`
  * Os ícones dos botões podem ser encontrados em `src/images/shareIcon.svg` e em `src/images/blackHeartIcon.svg`, respectivamente.
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se o card possui os atributos de uma comida:
    - foto da receita;
    - nome;
    - categoria e nacionalidade;
    - botão de compartilhar;
    - botão de favoritar.
</details>

---

### 52 - Desenvolva a tela de modo que, caso a receita do card seja uma bebida, ela deve possuir: a foto da receita,  nome, se é alcoólica ou não, um botão de compartilhar e um de "desfavoritar"

> Este requisito também inclui testes de cobertura da página `FavoriteRecipes.js`.

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>
  
  * A informação se a bebida é alcoólica deve ser exibida no elemento com o atributo `data-testid="${index}-horizontal-top-text"`. 
  * Os ícones dos botões podem ser encontrados em `src/images/shareIcon.svg` e em `src/images/blackHeartIcon.svg`, respectivamente.
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se o card possui os atributos corretos de uma bebida:
    - foto da receita;
    - nome;
    - se é alcoólica;
    - botão de compartilhar;
    - botão de favoritar.
  - Verifica a cobertura de 45% da tela de receitas favoritas.
</details>

---

### 53 - Desenvolva a solução de modo que o botão de compartilhar deve copiar a URL da tela de detalhes da receita para o clipboard

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se ao clicar no botão de compartilhar, aparece a mensagem "Link copied!";
  - Se a URL da tela de detalhes da receita é copiada para o clipboard.
</details>

---

### 54 - Desenvolva a solução de modo que o botão de "desfavoritar" deve remover a receita da lista de receitas favoritas do `localStorage` e da tela

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se ao clicar no botão de "desfavoritar", a respectiva receita é removida da tela.
  - Se ao clicar no botão de "desfavoritar", a respectiva receita é removida do `localStorage`.
</details>

---

### 55 - Implemente 2 botões que filtram as receitas por comida ou bebida e um terceiro que remove todos os filtros

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>
  
  * Os nomes dos botões devem ser "Meals", "Drinks" e "All", respectivamente
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se ao clicar no botão "Meals", as receitas devem ser filtradas por comidas;
  - Se ao clicar no botão "Drinks" , as receitas devem ser filtradas por bebidas;
  - Se ao clicar no botão "All", o filtro deve ser removido.
</details>

---

### 56 - Redirecione a pessoa usuária ao clicar na foto ou no nome da receita, a rota deve mudar para a tela de detalhes daquela receita

> Este requisito também inclui testes de cobertura da página `FavoriteRecipes.js`.

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Ao clicar na foto da receita, a rota deve mudar para a tela de detalhes daquela receita;
  - Ao clicar no nome da receita, a rota deve mudar para a tela de detalhes daquela receita.
  - Verifica a cobertura de 90% da Tela de receitas favoritas.
</details>

---



## Tela de perfil

> ⚠️ Observações: 
> 
> - 📁 Para os testes passarem é necessário que o componente seja chamado de `Profile.js`.
> - 🔗 A rota usada para essa tela deve ser `/profile`.

### 57 - Implemente os elementos da tela de perfil respeitando os atributos descritos no protótipo

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * O elemento de email deve possuir o atributo `data-testid="profile-email"`;
  * O botão para "Done Recipes" deve possuir o atributo `data-testid="profile-done-btn"`;
  * O botão para "Favorite Recipes" deve possuir o atributo `data-testid="profile-favorite-btn"`;
  * O botão de "Logout" deve possuir o atributo `data-testid="profile-logout-btn"`.
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Todos o data-testid do email e de todos os botões.
</details>

---

### 58 - Implemente a solução de maneira que o e-mail da pessoa usuária deve estar visível
  
<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se o e-mail armazenado em localStorage está visível.
</details>

---

### 59 - Implemente 3 botões: um de nome "Done Recipes", um de nome "Favorite Recipes" e um de nome "Logout"

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se a tela contêm todos os 3 botões.
</details>

---

### 60 - Redirecione a pessoa usuária que, ao clicar no botão de "Done Recipes", a rota deve mudar para a tela de receitas feitas

> Este requisito também inclui testes de cobertura do componente `Profile.js`.

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se redireciona para a rota correta.
  - Verifica a cobertura de 45% do componente Profile.
</details>

---

### 61 - Redirecione a pessoa usuária que, ao clicar no botão de "Favorite Recipes", a rota deve mudar para a tela de receitas favoritas

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se redireciona para a rota correta.
</details>

---

### 62 - Redirecione a pessoa usuária que ao clicar no botão de "Logout", o `localStorage` deve ser limpo e a rota deve mudar para a tela de login

> Este requisito também inclui testes de cobertura do componente `Profile.js`.

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se limpa todas as chaves da localStorage;
  - Se a rota muda para a tela de login.
  - Verifica a cobertura de 90% do componente Profile.
</details>
