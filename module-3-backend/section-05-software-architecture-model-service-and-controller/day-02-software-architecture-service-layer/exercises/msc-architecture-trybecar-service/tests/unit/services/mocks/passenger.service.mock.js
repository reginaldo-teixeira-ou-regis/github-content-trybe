const invalidValue = 'a';
const validName = 'Bruce Lane';
const validEmail = 'bruce.lane@acme.com';
const validPhone = '(77) 8179-0943';

const allPassengers = [
  {
    id: 1,
    name: validName,
    email: validEmail,
    phone: validPhone,
  },
];

const WAITING_DRIVER = 1;

const travelResponse = ({
  id: 1,
  passengerId: 1,
  driverId: null,
  travelStatusId: WAITING_DRIVER,
  startingAddress: 'Rua X',
  endingAddress: 'Rua Y',
  requestDate: '2022-08-24T03:04:04.374Z'
});

const WAITING_DRIVER_2 = 1;

const listTravelsWithoutDriver = [{
  id: 1,
  passengerId: 1,
  driverId: null,
  travelStatusId: WAITING_DRIVER_2,
  startingAddress: 'Start',
  endingAddress: 'End',
  requestDate: '2022-08-24T03:04:04.374Z',
}];

module.exports = {
  allPassengers,
  invalidValue,
  validName,
  validEmail,
  validPhone,
  travelResponse,
  listTravelsWithoutDriver,
};