const { driverService } = require('../services');
const errorMap = require('../utils/errorMap');
const { mapError } = require('../utils/errorMap');

const openTravel = async (_req, res) => {
  const { type, message } = await driverService.getWaitingDriverTravels();

  // Linha de código responsável por gerar uma resposta em caso de erro no
  // processamento do componente de software da camada `Service`
  if (type) return res.status(errorMap.mapError(type)).json(message);

  res.status(200).json(message);
};

const getDrivers = async (_req, res) => {
  const { message } = await driverService.getDrivers();

  res.status(200).json(message);
};

const createDriver = async (req, res) => {
  const { name, carIds } = req.body;
  const { type, message } = await driverService.createDriver(name, carIds);
  if (type) return res.status(mapError(type)).json({ message });

  res.status(201).json(message);
};

module.exports = {
  openTravel,
  getDrivers,
  createDriver,
};