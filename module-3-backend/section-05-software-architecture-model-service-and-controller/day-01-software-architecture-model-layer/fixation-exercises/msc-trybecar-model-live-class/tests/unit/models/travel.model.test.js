const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const { travelModel } = require('../../../src/models');
const { newTravel, travels, travelsFromDB } = require('./mocks/travel.model.mock');

describe('Testes de unidade do model de viagens', function () {
  it('Realizando uma operação INSERT com o model travel', async function () {
    // arrange
    sinon.stub(connection, 'execute').resolves([{ insertId: 42 }]);

    // act
    const result = await travelModel.insert(newTravel);

    // assert
    expect(result).to.equal(42);
  });

  it('Recuperando uma travel a partir do seu id', async function () {
    // arrange
    sinon.stub(connection, 'execute').resolves([[travelsFromDB[0]]]);
    // act
    const result = await travelModel.findById(1);
    // assert
    expect(result).to.be.deep.equal(travels[0]);
  });

  it('Recuperando as travels a partir do seu travel_status_id', async function () {
    // arrange
    sinon.stub(connection, 'execute').resolves([travelsFromDB]);
    // act
    const result = await travelModel.findByTravelStatusId(1);
    // assert
    expect(result).to.be.deep.equal(travels);
  });

  it('Realizando operação de UPDATE em travels alterando driver_id na rota /assign', async function () {
    // triple A ?
    // arrange
    const driverId = 99;
    const travelId = 1;
    const mockResult = [{
      affectedRows: 1,
      changedRows: 1
    }];
    sinon.stub(connection, 'execute')
      .resolves(mockResult);

    // sinon.stub(travelModel, 'xablau')
    //   .returns(1);

    // act
    const result = await travelModel.updateTravelById(driverId, travelId);

    // assert
    expect(result[0].affectedRows).to.be.equal(1);
    expect(result[0].changedRows).to.be.equal(1);
  });

  it('Realizando operação de UPDATE em travels alterando status da viagem em /assign', async function () {
    //triple A
    const updateMock = [
      {
        fieldCount: 1,
        affectedRows: 1,
        insertId: 0,
        info: 'Rows matched: 0  Changed: 0  Warnings: 0',
        serverStatus: 2,
        warningStatus: 0,
        changedRows: 1
      },
      undefined
    ];

    sinon.stub(connection, 'execute')
      .resolves(updateMock);

    // arrange
    const travelStatusId = 2;
    const travelId = 99999;
    const driverId = 99999;

    // act
    const result = await travelModel.updateStatusTravel(travelStatusId, travelId, driverId);
    // assert
    expect(result[0].affectedRows).to.be.equal(1);
    expect(result[0].changedRows).to.be.equal(1);
  });

  afterEach(function () {
    sinon.restore();
  });
});