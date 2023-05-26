-- Exercicios De Fixação: 

-- 1. 🚀 Crie um middleware `existingId` para garantir que o `id` passado como parâmetro na rota `GET /teams/:id` existe no objeto `teams`. Refatore essa rota para usar o middleware.

-- 2. 🚀 Reaproveite esse middleware e refatore as rotas `PUT /teams/:id` e `DELETE /teams/:id` para usarem ele também.

-- 3. 🚀 Mova o middleware `validateTeam` para o arquivo `src/middlewares/validateTeam.js`, mas continue usando o middleware nas rotas `POST /teams` e `PUT /teams/:id`.

-- 4. 🚀 Mova o middleware `existingId` para o arquivo `src/middlewares/existingId.js`, mas continue usando o middleware nas rotas `PUT /teams/:id` e `DELETE /teams/:id`.

-- 5. 🚀 Agora é sua vez. Modifique o código do middleware `existingId` para retornar o http status `404` e um objeto no formato `{ message: 'Time não encontrado' }` quando não encontrar o time com o id recebido.