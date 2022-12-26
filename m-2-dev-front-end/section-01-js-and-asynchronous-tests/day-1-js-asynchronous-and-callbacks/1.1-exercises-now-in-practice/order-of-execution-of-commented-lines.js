/* - Observe o código abaixo e responda: qual é a ordem de finalização de execução das linhas comentadas? */

const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} está a ${value} ${measurementUnit} de distância do Sol`;

const MEASUREMENT_UNIT = 'quilômetros';

const mars = {
  name: 'Marte',
  distanceFromSun: {
    value: 227900000,
    measurementUnit: MEASUREMENT_UNIT,
  },
};

const venus = {
  name: 'Venus',
  distanceFromSun: {
    value: 108200000,
    measurementUnit: MEASUREMENT_UNIT,
  },
};

const jupiter = {
  name: 'Jupiter',
  distanceFromSun: {
    value: 778500000,
    measurementUnit: MEASUREMENT_UNIT,
  },
};
console.log('A ordem de finalização de execução ABAIXO é "A", "B" e "C".');
console.log(planetDistanceFromSun(mars)); // A
console.log(planetDistanceFromSun(venus)); // B
console.log(planetDistanceFromSun(jupiter)); // C
console.log('===============================================');

const planetDistanceFromSun2 = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} está a ${value} ${measurementUnit} de distância do Sol`;

const MEASUREMENT_UNIT2 = 'quilômetros';

const mars2 = {
  name: 'Marte',
  distanceFromSun: {
    value: 227900000,
    measurementUnit: MEASUREMENT_UNIT2,
  },
};

const venus2 = {
  name: 'Venus',
  distanceFromSun: {
    value: 108200000,
    measurementUnit: MEASUREMENT_UNIT2,
  },
};

const jupiter2 = {
  name: 'Jupiter',
  distanceFromSun: {
    value: 778500000,
    measurementUnit: MEASUREMENT_UNIT2,
  },
};
console.log('A ordem de finalização de execução ABAIXO é "A", "C" e "B".');
console.log(planetDistanceFromSun2(mars2)); // A
setTimeout(() => console.log(planetDistanceFromSun2(venus2)), 3000); // B
setTimeout(() => console.log(planetDistanceFromSun2(jupiter2)), 2000); // C