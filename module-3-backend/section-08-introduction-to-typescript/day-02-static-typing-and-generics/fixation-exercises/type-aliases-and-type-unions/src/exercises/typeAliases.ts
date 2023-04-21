// 1 - Crie um type para um objeto que represente um pássaro.
type Bird = {
  wings: 2;
  beaks: 1;
  biped: true;
}

// 2 - Crie um type que represente uma função que recebe 
// dois valores numéricos e retorne a soma deles.
type Sum = (num1: number, num2: number) => number;

// 3 - Crie um type para um objeto que represente um endereço.
type Address = {
  publicPlace: string;
  number: number;
  district: string;
  city: string;
  state: string;
}