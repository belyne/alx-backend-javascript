// 8-api/api.test.js
const request = require('request');
const { expect } = require('chai');
const server = require('./api');

describe('Index page', () => {
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

  it('should return correct status code', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct result', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should handle other cases', (done) => {
    // Add more test cases as needed
    done();
  });
});
