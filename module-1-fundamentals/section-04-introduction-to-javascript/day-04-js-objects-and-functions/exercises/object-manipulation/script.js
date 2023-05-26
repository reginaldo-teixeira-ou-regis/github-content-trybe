let residents = {
    blockOne: [
      {
        name: 'Luiza',
        lastname: 'Guimarães',
        apartmentFloor: 10,
        apartment: 1005,
      },
      {
        name: 'William',
        lastname: 'Albuquerque',
        apartmentFloor: 5,
        apartment: 502,
      },
    ],
    blockTwo: [
      {
        name: 'Murilo',
        lastname: 'Ferraz',
        apartmentFloor: 8,
        apartment: 804,
      },
      {
        name: 'Zoey',
        lastname: 'Brooks',
        apartmentFloor: 1,
        apartment: 101,
      },
    ],
  };

let residentsblockTwo = residents.blockTwo;
let lastResidentBlockTwo = residentsblockTwo[residentsblockTwo.length - 1];

// Duas formas de acessar as propriedades do objeto "lastResidentBlockTwo"

console.log('O morador do bloco 2 de nome ' + lastResidentBlockTwo.name + ' ' + lastResidentBlockTwo.lastname + ' mora no ' + lastResidentBlockTwo.apartmentFloor + '° andar, apartamento ' + lastResidentBlockTwo.apartment);

// Ou

console.log('O morador do bloco 2 de nome ' + lastResidentBlockTwo['name'] + ' ' + lastResidentBlockTwo['lastname'] + ' mora no ' + lastResidentBlockTwo['apartmentFloor'] + '° andar, apartamento ' + lastResidentBlockTwo['apartment']);