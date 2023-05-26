const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (number) => numbers.find((number) => number % 3 === 0 && number % 5 === 0)


console.log(`O primeiro numero do array [${numbers}] divisivel por 3 e 5 é o ${findDivisibleBy3And5()}.`);
console.log(' ');

const names = ['João', 'Irene', 'Fernando', 'Maria'];
const findNameWithFiveLetters = () => names.find((name) => name.length === 5);

console.log(`O primeiro nome contendo 5 letras do array [${names}] é ${findNameWithFiveLetters()}.`);
console.log(' ');

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ];
  
  const findMusic = (id) => musicas.find((musica) => musica.id === id)
  
  console.log(findMusic('31031687'));