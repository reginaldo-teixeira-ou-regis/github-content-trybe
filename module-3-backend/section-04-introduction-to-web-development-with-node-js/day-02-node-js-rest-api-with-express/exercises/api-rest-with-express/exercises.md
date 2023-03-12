-- Vamos juntar tudo o que aprendemos até aqui e exercitar mais ainda nosso aprendizado!

-- Exercícios:

-- 1. Qual é a função do código de status `400` e `422`?
```js
-- Solução: 

-- De acordo com `o site do MDN`, `status code` com valores de `400` a `499`, são `erros do cliente`:

-- `400 Bad Request`: Essa resposta significa que o servidor não entendeu a requisição, pois está com uma `sintaxe inválida`.

-- `422 Unprocessable Entity`: A requisição está bem formada mas inabilitada para ser seguida devido aos `erros semânticos`.
```

-- 2. Qual é a função do código de status `401`?
```js
-- Solução: 
-- Ainda de acordo com o site do MDN e na faixa dos status com valores 400:

-- 401 Unauthorized: Embora o padrão HTTP especifique “unauthorized”, semanticamente, essa resposta significa “unauthenticated”. Ou seja, o cliente deve se autenticar para obter a resposta solicitada.
```

-- 3. 🚀 Crie um servidor `Node.js` utilizando o framework `Express`;

-- 4. 🚀 Crie uma função de leitura do JSON com o modulo fs;

-- 5. 🚀 Crie um endpoint do tipo GET com a rota /movies/:id, que possa listar um filme do JSON por id;

-- 6. 🚀 Crie um endpoint do tipo GET com a rota /movies, que possa listar todos os filmes do JSON;

-- 7. 🚀 Crie um endpoint do tipo POST com a rota /movies, para cadastrar um novo filme no JSON.
O corpo da requisição deve receber o seguinte formato:
```js
{
  "movie": "Vingadores",
  "price": 5
}
```

-- 8. 🚀 Crie um endpoint do tipo PUT com a rota /movies/:id, que possa editar informações de um filme do JSON.
O corpo da requisição deve receber o seguinte formato:
```js
{
  "movie": "Vingadores: Ultimato",
  "price": 5
}
```

-- 9. 🚀 Crie um endpoint do tipo DELETE com a rota /movies/:id que possa deletar um filme do JSON;

-- 10. 🚀 Crie um endpoint do tipo GET com a rota /movies/search, que possa listar todos os filmes do JSON.
A rota deve receber a informação por query e a chave deve-se chamar q. A chave vai trazer consigo valor de ‘gente’ por exemplo, e o filtro deve trazer apenas os filmes com esse termo, se não encontrar, traga um array vazio.
