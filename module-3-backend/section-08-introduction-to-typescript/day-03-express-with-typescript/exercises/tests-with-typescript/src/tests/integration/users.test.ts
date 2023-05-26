/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable max-lines-per-function */
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import Sinon from 'sinon';
import app from '../../app';
import userModel from '../../models/user.model';
import jwtService from '../../services/jwt.service';

chai.use(chaiHttp);

describe('Users Router', () => {
  afterEach(() => {
    Sinon.restore();
  });

  describe('GET /users', () => {
    describe('Dado um acesso não autenticado', () => {
      it('Deve retornar 401', async () => {
        // arrange => dado um contexto
        // act => ao executar um código
        const response = await chai.request(app)
          .get('/users');
        // assert => espero um resultado
        expect(response.status).to.be.equal(401);
      });
    });

    describe('Dado um token inválido', () => {
      it('Deve retornar 401', async () => {
        // arrange => dado um contexto
        // act => ao executar um código
        const response = await chai.request(app)
          .get('/users')
          .set('Authorization', 'token-invalid');
        // assert => espero um resultado
        expect(response.status).to.be.equal(401);
      });
    });

    describe('Dado um token válido', () => {
      it('Deve retornar 200 e os usuários do banco!!!', async () => {
        // arrange => dado um contexto
        Sinon.stub(jwtService, 'verify').returns({
          email: 'email@email.com',
          id: 1,
        });
        Sinon.stub(userModel, 'findAll').resolves([
          {
            id: 1, email: 'valid@email.com', name: 'User 1', password: 'pass',
          },
        ]);

        // act => ao executar um código
        const response = await chai.request(app)
          .get('/users')
          .set('Authorization', 'token-valid');

        // assert => espero um resultado
        expect(response.status).to.be.equal(200);
        expect(response.body).to.be.deep.equal([
          {
            id: 1, email: 'valid@email.com', name: 'User 1', password: 'pass',
          },
        ]);
      });
    });
  });

  describe('POST /login', () => {
    // email não enviado
    describe('Dado que o email não é enviado', () => {
      it('Deve retornar 400', async () => {
        const response = await chai.request(app)
          .post('/login')
          .send({
            password: 'pass',
          });

        expect(response.status).to.equal(400);
      });
    });
    // senha não enviada
    describe('Dado que a senha não é enviada', () => {
      it('Deve retornar 400', async () => {
        const response = await chai.request(app)
          .post('/login')
          .send({
            email: 'email@email.com',
          });

        expect(response.status).to.equal(400);
      });
    });
    // email/senha inválido
    describe('Dado que o email ou senha estão inválidos', () => {
      it('Deve retornar 401', async () => {
        Sinon.stub(userModel, 'findByEmail').resolves(undefined);

        const response = await chai.request(app)
          .post('/login')
          .send({
            email: 'email@email.com',
            password: 'pass',
          });

        expect(response.status).to.equal(401);
      });
    });

    // login com sucesso
    describe('Dado que o email e a senha são válidos', () => {
      it('Deve retornar 200 e o token', async () => {
        Sinon.stub(userModel, 'findByEmail').resolves({
          id: 1,
          email: 'email@emasdfasfail.com',
          password: 'pass',
          name: 'User 1',
        });

        const response = await chai.request(app)
          .post('/login')
          .send({
            email: 'email@email.com',
            password: 'pass',
          });

        expect(response.status).to.equal(200);
        expect(response.body.token).not.to.be.empty;
      });
    });
  });
});