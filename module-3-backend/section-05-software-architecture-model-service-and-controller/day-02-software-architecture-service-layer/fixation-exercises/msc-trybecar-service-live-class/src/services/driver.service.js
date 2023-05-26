const { travelModel, driverModel } = require('../models');

const WAITING_DRIVER = 1;
const DRIVER_ON_THE_WAY = 2;

const getWaitingDriverTravels = async () => {
  const travels = await travelModel.findByTravelStatusId(WAITING_DRIVER);
  return { type: null, message: travels };
};

const validateInputsValues = async ({ travelId, driverId }) => {
  if (!travelId || !driverId) {
    return { type: 'FIELD_REQUIRED', message: 'Todos os campos são obrigatorios' };
  }

  return { type: null, message: '' }
};

const validateTravel = async ({ travelId, driverId }) => {
  // valido se a viagem existe
  const travel = await travelModel.findById(travelId);
  if (!travel) {
    return { type: 'TRAVEL_NOT_FOUND', message: 'Esta viagem nao existe' };
  }

  // valido se a viagem ja foi aceita
  if (travel.driverId) {
    console.log('travel', travel);
    return { type: 'TRAVEL_CONFLICT', message: 'Esta viagem já foi aceita, perdeu playboy' };
  }

  // valido se a viagem ja foi aceita
  if (travel.driverId === driverId) {
    return { type: 'DRIVER_CONFLICT', message: 'Voce ja aceitou essa viagem' };
  }
  return { type: null, message: '' }
}

const validateDriverAlready = async (driverId) => {
  // validar se o motorista existe
  const driver = await driverModel.findById(driverId);
  if (!driver) {
    return { type: 'DRIVER_NOT_FOUND', message: 'Motorista nao existe, e golpe, corre!' };
  }
  return { type: null, message: '' }
}

const travelAssign = async (travelId, driverId) => {
  /* Validar se travelId e driverId são ids EXISTENTES */
  let error;
  error = await validateInputsValues({ travelId, driverId });
  if (error.type) return error;
  error = await validateDriverAlready(driverId);
  if (error.type) return error;
  error = await validateTravel({ travelId, driverId });
  if (error.type) return error;

  await travelModel.updateById(travelId, { driverId, travelStatusId: DRIVER_ON_THE_WAY });
  const travel = await travelModel.findById(travelId);
  return travel;
}

module.exports = {
  getWaitingDriverTravels,
  travelAssign
};