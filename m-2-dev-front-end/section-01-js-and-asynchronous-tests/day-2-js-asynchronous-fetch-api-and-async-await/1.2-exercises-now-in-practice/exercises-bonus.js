/* Exercício 1
Vamos usar a função fetch para criar um site simples com um gerador de piadas ruins!. Como? Vamos praticar!

Antes de tudo, veja o manual da API do site icanhazdadjoke.com, ele esclarece como fazer as requisições ao serviço de piadas. Por enquanto, é necessário somente que você faça uma leitura breve.
Agora, vamos entender como funciona essa API:

Para começar, vamos fazer uma requisição via browser. Visite o site icanhazdadjoke.com e perceba que ele devolve uma página HTML com uma piada aleatória.

Em seguida, no terminal, vamos fazer a requisição: curl -H "Accept: text/html" "https://icanhazdadjoke.com/". Perceba que o retorno é um HTML idêntico ao de uma requisição via browser com uma piada aleatória.

Para a próxima requisição, vamos usar o comando: curl -H "Accept: text/plain" "https://icanhazdadjoke.com/". Veja que agora recebemos apenas a piada aleatória em formato texto.

Por fim, faça a requisição: curl -H "Accept: application/json" "https://icanhazdadjoke.com/". Agora a API retorna um objeto no formato JSON. Perceba que, dependendo do que passamos na chave Accept: no header, definido por -H no comando, o serviço nos retorna uma resposta diferente.

Utilize o HTML e o js a seguir como base: */

// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  fetch(API_URL, { headers: { Accept: 'application/json' } })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById('jokeContainer').innerText = data.joke;
    });
};

window.onload = () => fetchJoke();