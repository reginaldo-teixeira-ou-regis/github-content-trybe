/* eslint-disable max-lines-per-function */
// arrange => dado um contexto
// act => ao executar um código
// assert => espero um resultado

// tdd => red => green => refactor

import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import Sinon from 'sinon';
import userModel from '../../models/user.model';
import jwtService from '../../services/jwt.service';
import userService from '../../services/user.service';
import { User } from '../../types/User';

chai.use(chaiAsPromised);

// email inválido
// senha inválida
// login válido, token gerado
const userMock: User = {
  id: 1, email: 'valid@email.com', name: 'User 1', password: 'pass',
};

describe('User Service', () => {
  afterEach(() => {
    Sinon.restore();
  });

  describe('findAll', () => {
    describe('Dado um banco vazio', () => {
      it('retorna um array vazio', async () => {
        // arrange => dado um contexto
        Sinon.stub(userModel, 'findAll').resolves([]);
        // act => ao executar um código
        const users = await userService.findAll();
        // assert => espero um resultado
        expect(users).to.be.deep.equal([]);
      });
    });

    describe('Dado um banco populado', () => {
      it('retorna um array populado', async () => {
        // arrange => dado um contexto
        Sinon.stub(userModel, 'findAll').resolves([
          { id: 1, email: 'email@email.com', name: 'User 1', password: 'pass' },
        ]);
        // act => ao executar um código
        const users = await userService.findAll();
        // assert => espero um resultado
        expect(users).to.be.deep.equal([
          { id: 1, email: 'email@email.com', name: 'User 1', password: 'pass' },
        ]);
      });
    });
  });

  describe('login', () => {
    describe('Dado um email inválido', () => {
      it('Deve lançar um erro UNAUTHORIZED', async () => {
        // arrange => dado um contexto
        Sinon.stub(userModel, 'findByEmail').resolves(undefined);
        // act => ao executar um código
        // assert => espero um resultado
        await expect(userService.login('invalid@email.com', 'pass'))
          .to.be.rejectedWith('UNAUTHORIZED');
      });
    });

    describe('Dado uma senha inválida', () => {
      it('Deve lançar um erro UNAUTHORIZED', async () => {
        // arrange => dado um contexto
        Sinon.stub(userModel, 'findByEmail').resolves(userMock);
        // act => ao executar um código
        // assert => espero um resultado
        await expect(userService.login(userMock.email, 'invalid-pass'))
          .to.be.rejectedWith('UNAUTHORIZED');
      });
    });

    describe('Dado email e senha válidos', () => {
      it('Deve retornar um token JWT', async () => {
        Sinon.stub(userModel, 'findByEmail').resolves(userMock);
        Sinon.stub(jwtService, 'sign').returns('JWT');

        const token = await userService.login(userMock.email, 'pass');
        expect(token).to.be.equal('JWT');
      });
    });
  });
});