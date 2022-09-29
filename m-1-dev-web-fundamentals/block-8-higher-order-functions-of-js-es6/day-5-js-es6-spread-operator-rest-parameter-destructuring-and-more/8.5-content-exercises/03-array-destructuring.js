/* Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação. */

const saudacoes = ['Olá', (saudacao) => console.log(saudacao), 'Bom dia!'];

saudacoes[1](saudacoes[0]); // Olá
console.log(' ');
// Produza o mesmo resultado acima, porém utilizando array destructuring

const [salutationOne, salutationTwo, salutationThree] = saudacoes;
console.log(salutationOne, salutationTwo, salutationThree);

console.log('====================================================');

/* A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis. */

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida, animal, bebida] = [bebida, comida, animal];

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

console.log('====================================================');

/* O array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares. */

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

const [one, two, three, four, five, six, seven] = numerosPares

numerosPares = [four, five, six, seven]

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo