// 10-api/api.test.js
const request = require('request');
const { expect } = require('chai');
const server = require('./api');

describe('Login endpoint', () => {
  // Run the server before the tests
  before((done) => {
    server.on('listening', () => {
      done();
    });
  });

  // Close the server after the tests
  after(() => {
    server.close();
  });

  it('should return correct message for POST /login', (done) => {
    const options = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      json: { userName: 'Betty' }
    };

    request(options, (error, response, body) => {
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});

describe('Available payments endpoint', () => {
  // Run the server before the tests
  before((done) => {
    server.on('listening', () => {
      done();
    });
  });

  // Close the server after the tests
  after(() => {
    server.close();
  });

  it('should return correct object for GET /available_payments', (done) => {
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      const expected = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      expect(JSON.parse(body)).to.deep.equal(expected);
      done();
    });
  });
});
