const camelize = require('camelize');
const snakeize = require('snakeize');
const connection = require('./connection');

const insert = async (travel) => {
  const columns = Object.keys(snakeize(travel)).join(', ');

  const placeholders = Object.keys(travel)
    .map((_key) => '?')
    .join(', ');

  const [{ insertId }] = await connection.execute(
    `INSERT INTO travels (${columns}) VALUE (${placeholders})`,
    [...Object.values(travel)],
  );

  return insertId;
};

const findById = async (travelId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM travels WHERE id = ?',
    [travelId],
  );
  return camelize(result);
};

const findByTravelStatusId = async (travelStatusId) => {
  const [result] = await connection.execute(
    'SELECT * FROM travels WHERE travel_status_id = ?',
    [travelStatusId],
  );
  return camelize(result);
};

// const xablau = (a, b) => {
//   return a + b
// }

// testando essa função
const updateTravelById = async (driverId, travelId) => {
  // const res = xablau(1, 2);
  // console.log('XABLAU', res);
  return connection.execute(
    'UPDATE travels SET driver_id = ? WHERE id = ?',
    [driverId, travelId],
  );
}

const updateStatusTravel = (travelStatusId, travelId, driverId) => {
  return connection.execute(
    'UPDATE travels SET travel_status_id = ? WHERE id = ? AND driver_id = ?',
    [travelStatusId, travelId, driverId],
  );
}

module.exports = {
  insert,
  findById,
  findByTravelStatusId,
  updateTravelById,
  updateStatusTravel
};