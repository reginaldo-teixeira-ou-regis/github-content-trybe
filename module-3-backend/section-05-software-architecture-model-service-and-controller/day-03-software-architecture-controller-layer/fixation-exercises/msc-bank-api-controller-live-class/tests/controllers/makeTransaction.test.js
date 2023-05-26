const chai = require('chai');
const sinon = require('sinon');
const transactionService = require('../../src/services/transaction.service');
const transactionController = require('../../src/controllers/transactionController');
const { successTransactionService, successTransaction } = require('../mocks/createTransactionMock');
chai.use(require('chai-as-promised'));

const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const { expect } = chai;

describe('Testando Controller', function () {
  describe('Testando criação de transaction com sucesso', function () {
    it('Deve criar transação corretamente', async function () {
      // arrange 
      before(function () {
        sinon.stub(transactionService, 'createTransaction')
          .resolves(successTransactionService);
      });

      after(function () {
        sinon.restore();
      });

      const req = {
        body: {
          to: 1,
          from: 2,
          amount: 1000
        }
      }

      const res = {}
      const next = {}
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      // act
      await transactionController.makeTransaction(req, res, next);

      // assert
      // validar se retorna um status 201
      expect(res.status).to.have.been.calledWith(201);
      // validar se teve uma mensagem na resposta
      expect(res.json).to.have.been.calledWith(successTransaction);
    });

    it.only('Não deve ser possível fazer transferencia para a mesma pessoa', async function () {
      // arrange 
      const req = {
        body: {
          to: 1,
          from: 1,
          amount: 1000
        }
      }

      const res = {}
      const next = {}
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      // act
      try {
        await transactionController.makeTransaction(req, res);
      } catch (error) {
        expect(error.message).to.deep.equal('To and From can not be equal');
      }
      
      await expect(transactionController.makeTransaction(req, res)).to.be.rejectedWith('...');
      // assert
      // validar se retorna um status 201
      // validar se teve uma mensagem na resposta
      // expect(res.json).to.have.been.calledWith(successTransaction);
    });
  });
});