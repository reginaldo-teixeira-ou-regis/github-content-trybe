// Obs: pegamos o valor do TF16 de cada elemento por seu proprio numero de charCode, por isso o sort() tem seu proprio jeito de ordenar os elementos.

console.log(``);
console.log(`============================================================`);
console.log(``);
/* Altere o tipo das variáveis(var) para let ou const para que respeitem o escopo em que foram declaradas, e altere a função utilizando arrow function e template literals.

Modifique a estrutura da função para que ela seja uma arrow function;
Modifique as variáveis para que respeitem o escopo onde estão declaradas;
Modifique as concatenações para template literals. */

const testingScope = (escopo) => {
    if (escopo === true) {
        let ifScope = `Não devo ser utilizada fora do meu escopo (if).`;
        ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
        console.log(`Answers from exercise 1 -> ${ifScope}`);
        console.log('');
    } else {
      const elseScope = `Não devo ser utilizada fora do meu escopo (else)`;
      console.log(`Answers from exercise 1 -> ${elseScope}`);
    }
    /* console.log(`${ifScope} o que estou fazendo aqui ? :O`); */
  }

  testingScope(true);
  testingScope(false);

console.log(``);
console.log(`============================================================`);
console.log(``);

/* Crie uma função que retorne um array em ordem crescente.

Crie uma função que faça com que o array oddsAndEvens fique em ordem crescente;
Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne a frase “Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!”.
Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números. */

let oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
// ordenar sem o sort()
}
sortOddsAndEvens();

console.log(`Answers from exercise 2 -> Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);

let oddsAndEvensSort = [13, 3, 4, 10, 7, 2];

const usingArraySort = () => {oddsAndEvensSort.sort((a, b) => a - b);}
// Para fazer descrecente é só alterar a posição de (a - b) para (b - a).

/* const usingArraySort = () => {
    oddsAndEvensSort.sort((a, b) => {
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    });
} */

usingArraySort();

console.log(`Answers from exercise 2 -> Os números ${oddsAndEvensSort} se encontram ordenados de forma crescente!`);

console.log(``);
console.log(`============================================================`);
console.log(``);

//ordenar strings usando sort()
const arrayStrings = ['Julia', 'Robertinho', 'carro', 'Carlos', '100', 'Reginaldo', 'banana', 'Erickaum', 'tapete'];

//para ordenar uma string precisamos do -> localeCompare
const stringsOrder = arrayStrings.sort((a, b) => {
    return a.localeCompare(b);
});

console.log(`arrayStrings em ordem alfabetica -> ${stringsOrder}`);

console.log(``);
console.log(`============================================================`);
console.log(``);

//ordenar array de objetos usando sort()
const arrayObjectAlbums = [
    {name: 'The Number of The Beast', year: 1982},
    {name: 'aaaaaaaaa', year: 2000},
    {name: 'Iron Maiden', year: 1980},
    {name: 'killers', year: 1981},
];

const objectOrderYear= (a, b) => {
    return b.year - a.year;
};

const orderYear = arrayObjectAlbums.sort(objectOrderYear);

console.log(`Colocando o arrayObjectAlbums em ordem descrecente por ano:`);
console.log(orderYear);

//para ordenar uma string precisamos do -> localeCompare
const objectOrderName = (a, b) => {
    return b.name.localeCompare(a.name);
};

const orderName = arrayObjectAlbums.sort(objectOrderName);

console.log(``);
console.log(`Colocando o arrayObjectAlbums em ordem descrecente por nome:`);
console.log(orderName);


console.log(``);
console.log(`============================================================`);
console.log(``);

// Faça a ordenação de numeros. string, arrays e objetos usando apenas os parametros com o codigo abaixo:
const orderAscOrDescNorS = (data, dir = 'ASC', key = null) => {
    const firstElement = (key) ? data[0][key] : data[0];
    const isNumber = !isNaN(firstElement);
    const isAsc = dir.toUpperCase() === 'ASC';

    if(isNumber) {
        return data.sort((a,b) => {
            const x = (key) ? a[key] : a;
            const y = (key) ? b[key] : b;
            if(isAsc) return x - y;
            if(!isAsc) return y - x;
        })
    }
    return data.sort((a,b) => {
        const x = (key) ? a[key] : a;
        const y = (key) ? b[key] : b;
        if(isAsc) return x.localeCompare(y);
        if(!isAsc) return y.localeCompare(x);
    })
}

const numbers = [25, 99, 30, 1, 9, 1000, 0, 33, 2]

console.log(orderAscOrDescNorS(numbers, 'desc'));

console.log(``);
console.log(`============================================================`);
console.log(``);

const names = ['Julia', 'Jorge', '255', 'true', 'bola', 'caminhão', 'astra', 'Xuxa']

console.log(orderAscOrDescNorS(names, 'asc'));

console.log(``);
console.log(`============================================================`);
console.log(``);

const numbersObject = [
    {number: 2},
    {number: 100},
    {number: 3},
    {number: 0},
    {number: 44},
    {number: 1000},
    {number: 23},
    {number: 7},
]

console.log(orderAscOrDescNorS(numbersObject, 'desc', 'number'));
console.log(``);

console.log(`============================================================`);
console.log(``);

const namesObject = [
    {name: 'Julia'},
    {name: 'motoqueiro'},
    {name: 'Thomas'},
    {name: 'Ana Clara'},
    {name: 'banana'},
]

console.log(orderAscOrDescNorS(namesObject, 'asc', 'name'));