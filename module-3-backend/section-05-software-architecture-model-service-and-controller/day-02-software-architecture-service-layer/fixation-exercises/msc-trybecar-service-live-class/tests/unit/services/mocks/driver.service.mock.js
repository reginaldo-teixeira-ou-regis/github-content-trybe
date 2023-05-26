/* 
Aqui vai haver outros mocks a serem implementados nos 
exercícios de fixação da lição "Refatorando - Parte 2""
do dia BE5.2  - Arquitetura de Software: Camada Service!!
*/

const DRIVER_ON_THE_WAY = 2;

const correctReturnTravel = ({
  id: 1,
  passengerId: 1,
  driverId: 1,
  travelStatusId: DRIVER_ON_THE_WAY,
  startingAddress: 'Start',
  endingAddress: 'End',
  requestDate: '2022-08-24T03:04:04.374Z',
});

const correctReturnDriver = ({
  id: 1,
  name: 'drivers name',
  carId: 1,
});

const busyDriver = ({
  id: 1,
  passengerId: 1,
  driverId: 1,
  travelStatusId: DRIVER_ON_THE_WAY,
  startingAddress: 'Start',
  endingAddress: 'End',
  requestDate: '2022-08-24T03:04:04.374Z',
});

module.exports = {
  correctReturnTravel,
  correctReturnDriver,
  busyDriver,
};