// EXERCICIO 8
// Crie um arquivo index.ts que pergunta qual conversão a pessoa 
// usuária deseja realizar, e chama o script correspondente:

// 1. O script deve ser acionado por meio do comando npm start no package.json;
// 2. Utilize o readline-sync para realizar o input de dados;
// 3. Quando executado, o script deve exibir 
// uma lista numerada dos scripts disponíveis;
// 4. Você pode utilizar o require para executar o script em questão.

import readline from 'readline-sync'; // importamos o pacote readline-sync

// criamos um array de objetos com o nome do 
// script e o caminho do script a ser executado
const scripts = [
  { name: 'Converter comprimento', script: './exercises/convertXforY/length' },
  { name: 'Converter massa', script: './exercises/convertXforY/mass' },
  { name: 'Converter capacidade', script: './exercises/convertXforY/capacity' },
  { name: 'Converter área', script: './exercises/convertXforY/area' },
  { name: 'Converter volume', script: './exercises/convertXforY/volume' },
];

// criamos um novo array somente com os nomes dos scripts
const scriptNames = scripts.map((item) => item.name);

// pedimos à pessoa usuária para escolher um dos scripts de conversão
const choice = readline.keyInSelect(
  scriptNames, 'Escolha um número para executar o script de conversão de unidade'
);


if (scripts && Array.isArray(scripts) && scripts.length > 0 && choice >= 0 && choice <= 4) {
  require(scripts[choice].script);
} else {
  console.error('Script não encontrado.');
}