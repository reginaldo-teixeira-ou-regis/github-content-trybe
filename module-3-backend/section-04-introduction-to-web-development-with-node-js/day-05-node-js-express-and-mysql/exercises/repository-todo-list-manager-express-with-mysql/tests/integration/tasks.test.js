const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

const app = require('../../src/app');
const connection = require('../../src/db/connection');

const { expect, use } = chai;

use(chaiHttp);

const taskList = [
  {
    "id": 1,
    "name": "Comprar pão doce",
    "description": "Café da manhã"
  },
  {
    "id": 2,
    "name": "Lavar louca",
    "description": "Afazeres domésticos"
  }
];

describe('Testing task endpoints', function () {
  it('Testing the registration of a task', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 42 }]);

    const response = await chai.request(app).post('/tasks')
      .send(
        {
          name: 'Ibis Futebol Clube',
          description: 'Clube de futebol registrado',
        },
      );

    expect(response.status).to.equal(201);
    expect(response.body).to.
      deep.equal({ message: 'Task successfully registered with the id 42' });
  });

  it('Testing the change of a task with the id 1', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
    const response = await chai.request(app).put('/tasks/1')
      .send(
        {
          name: 'Ibiszão',
          description: 'Fã Clube de futebol registrado do IBIS',
        },
      );

    expect(response.status).to.equal(200);
    expect(response.body).to
      .deep.equal({ message: 'Task of id 1 updated successfully' });
  });

  it('Testing the task deletion with id 1', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
    const response = await chai.request(app).delete('/tasks/1');

    expect(response.status).to.equal(200);
    expect(response.body).to
      .deep.equal({ message: 'Task of id 1 successfully deleted' });
  });

  it('Testing the list of all tasks', async function () {
    sinon.stub(connection, 'execute').resolves([taskList]);
    const response = await chai.request(app).get('/tasks');

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(taskList);
  });

  it('Testing task listing with id 1', async function () {
    sinon.stub(connection, 'execute').resolves([[taskList[0]]]);
    const response = await chai.request(app).get('/tasks/1');

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(taskList[0]);
  });

  afterEach(sinon.restore);
});