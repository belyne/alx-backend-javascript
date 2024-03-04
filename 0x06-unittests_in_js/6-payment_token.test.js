// 6-payment_token.test.js
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with success response when success is true', (done) => {
    // Call the async function
    getPaymentTokenFromAPI(true)
      .then((response) => {
        // Assert that the response is as expected
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done(); // Call done to indicate that the test is complete
      })
      .catch(done); // Call done in case of an error to indicate that the test is complete with an error
  });

  it('should return a resolved promise with undefined for failure case', (done) => {
    // Call the async function
    getPaymentTokenFromAPI(false)
      .then((response) => {
        // Assert that the response is undefined
        expect(response).to.be.undefined;
        done(); // Call done to indicate that the test is complete
      })
      .catch(done); // Call done in case of an error to indicate that the test is complete with an error
  });
});
