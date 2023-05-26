const chai = require('chai');
const chaiHttp = require('chai-http');

const sinon = require('sinon');
const fs = require('fs');

const app = require('../../src/app');

const { expect } = chai;

chai.use(chaiHttp);

const mockFile = JSON.stringify({ 
  brands: [
    {
      id: 1,
      name: 'Lindt & Sprungli',
    },
    {
      id: 2,
      name: 'Ferrero',
    },
    {
      id: 3,
      name: 'Ghirardelli',
    },
  ],
  chocolates: [
    {
      id: 1,
      name: 'Mint Intense',
      brandId: 1,
    },
    {
      id: 2,
      name: 'White Coconut',
      brandId: 1,
    },
    {
      id: 3,
      name: 'Mon Chéri',
      brandId: 2,
    },
    {
      id: 4,
      name: 'Mounds',
      brandId: 3,
    },
  ],
});

describe('Testing the Cacau Trybe API', () => {
  beforeEach(() => { sinon.stub(fs.promises, 'readFile').resolves(mockFile); });

  afterEach(() => { sinon.restore(); });

  describe('Using the GET method on /chocolates', () => {
    it('Returns the full list of chocolates!', async () => {
      const output = [
        { id: 1, name: 'Mint Intense', brandId: 1 },
        { id: 2, name: 'White Coconut', brandId: 1 },
        { id: 3, name: 'Mon Chéri', brandId: 2 },
        { id: 4, name: 'Mounds', brandId: 3 },
      ];

      const response = await chai.request(app).get('/chocolates');
      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal(output);
    });
  });
});

describe('Using the GET method on /chocolates/:id to fetch ID 4', () => {
  it('Returns the chocolate Mounds', async () => {
    const response = await chai.request(app).get('/chocolates/4');

    expect(response.status).to.be.equal(200);
    expect(response.body.chocolate).to.deep.equal(
      {
        id: 4,
        name: 'Mounds',
        brandId: 3,
      },
    );
  });
});

describe('Using GET method on /chocolates/:id to fetch ID 99', () => {
  it('Returns status 404 with message "Chocolate not found"', async () => {
    const response = await chai.request(app).get('/chocolates/99');

    expect(response.status).to.be.equal(404);
    expect(response.body).to.deep.equal({ message: 'Chocolate not found' });
  });
});

describe('Using the GET method on /chocolates/brand/:brandId to fetch brandId 1', () => {
  it('Returns the chocolates of the brand Lindt & Sprungli', async () => {
    const response = await chai.request(app).get('/chocolates/brand/1');

    expect(response.status).to.be.equal(200);
    expect(response.body.chocolates).to.deep.equal([
      {
        id: 1,
        name: 'Mint Intense',
        brandId: 1,
      },
      {
        id: 2,
        name: 'White Coconut',
        brandId: 1,
      },
    ]);
  });
});

describe('Using the GET method on /chocolates/total', () => {
  it('Returns the total quantity of chocolates', async () => {
    const response = await chai.request(app).get('/chocolates/total');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal({ totalChocolates: 4 });
  });
});

describe('Using the GET method on /chocolates/search', () => {
  it('Returns chocolates that contain "Mo" in the name', async () => {
    const response = await chai.request(app).get('/chocolates/search?name=Mo');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal([
      { id: 3, name: 'Mon Chéri', brandId: 2 },
      { id: 4, name: 'Mounds', brandId: 3 },
    ]);
  });

  it('Returns an empty array when not finding any chocolate', async () => {
    const response = await chai.request(app).get('/chocolates/search?name=ZZZ');

    expect(response.status).to.be.equal(404);
    expect(response.body).to.deep.equal([]);
  });
});

describe('Using the PUT method on /chocolates/:id', () => {
  it('Updates an existing chocolate', async () => {
    const response = await chai.request(app).put('/chocolates/1').send({
      name: 'Mint Pretty Good', brandId: 2 });

    expect(response.status).to.be.equal(200);
    expect(response.body.chocolate).to.deep.equal({
      id: 1, name: 'Mint Pretty Good', brandId: 2,
    });
  });
    
  it('If the chocolate does not exist, it generates an error', async () => {
    const response = await chai.request(app).put('/chocolates/555').send({
      name: 'Mint Pretty Good', brandId: 2,
    });
    
    expect(response.status).to.be.equal(404);
    expect(response.body).to.deep.equal({ message: 'chocolate not found' });
  });
});