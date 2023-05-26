/* Escreva uma função shipLength que, dado um objeto representando um navio, retorna o comprimento dele, mostrando também a devida unidade de medida:
De olho na dica 👀: use o object destructuring. */

const ships = [
  {
    name: "Titanic",
    length: 269.1,
    measurementUnit: "meters",
  },
  {
    name: "Queen Mary 2",
    length: 1132,
    measurementUnit: "feet",
  },
  {
    name: "Yamato",
    length: 256,
    measurementUnit: "meters",
  },
  // measurementUnit: unidade de medida
];

const shipLength = ({ name, length, measurementUnit }) =>
  `${name} is ${length} ${measurementUnit} long.`;

// retorno esperado
console.log(shipLength(ships[0])); // 'Titanic is 269.1 meters long'
console.log(" ");
console.log(shipLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
console.log(" ");
console.log(shipLength(ships[2])); // 'Yamato is 256 meters long'
