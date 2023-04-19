// EXERCICIO 1
// Temos uma API que começou a ter diversos erros e apresentar bugs 
// frequentes. Como solução, o CTO do time, avaliou que utilizar o 
// Typescript em suas funções, diminuiria um pouco desses problemas.

// Para isso você foi direcionado a modificar as funções abaixo, 
// escritas em Javascript, para que fossem tipadas e executassem 
// sem erros no compilador de Typescript:

// Observação: Não é necessário alterar o valor dos parâmetros passados.

// Dica: utilize o Typescript playground para 
// testar o comportamento de cada função.

// Função 1
const numberInput = 7;

const isItAPrime = (num: number) => {
  for (let i = 2; i < num; i++)
    if (num % i === 0) {
      return false;
    }
  return num > 1;
};

isItAPrime(numberInput)
  ? console.log(`${numberInput} é primo`)
  : console.log(`${numberInput} não é primo`);

// Função 2
// Essa função é responsável por validar se o formato do e-mail está correto.

const emailInput = 'email@email.com';

const validateEmailFormat = (email: string) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
};

console.log(validateEmailFormat(emailInput))

// Função 3
// Essa função recebe uma lista e ordena seu conteúdo de forma crescente.

const numberList = [10, 5, 18, 2, 8, 23];

const sortInput = (list: number[]) => {
  return list.sort(function(a, b){return a-b});
};

console.log(sortInput(numberList));

// Função 4
// Essa função é responsável por receber um objeto
// e formar uma frase utilizando as chaves do mesmo.
const peopleInput = {
  name: 'Rui',
  age: 23,
};

const createSimpleSentence = (person: {name: string, age: number}) => {
  return `Olá, meu nome é ${person.name} e tenho ${person.age} anos.`;
}

console.log(createSimpleSentence(peopleInput));

// Função 5
// Essa é uma função que verifica se a idade passada é maior ou menor de 18 anos.
const ageInput = 15;

const isOfLegalAge = (param: string | boolean) => {
  return !!param
}

ageInput >= 18
  ? console.log(isOfLegalAge('true'))
  : console.log(isOfLegalAge(false));
