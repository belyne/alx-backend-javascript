// 9-api/api.test.js
const request = require('request');
const { expect } = require('chai');
const server = require('./api');

describe('Cart page', () => {
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

  it('should return correct status code when :id is a number', (done) => {
    request.get('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct result when :id is a number', (done) => {
    request.get('http://localhost:7865/cart/12', (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return 404 status code when :id is NOT a number', (done) => {
    request.get('http://localhost:7865/cart/hello', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('should handle other cases', (done) => {
    // Add more test cases as needed
    done();
  });
});
