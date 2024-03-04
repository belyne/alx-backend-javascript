// 6-payment_token.js
function getPaymentTokenFromAPI(success) {
  if (success) {
    return Promise.resolve({ data: 'Successful response from the API' });
  } else {
    // Do nothing for failure case
    return Promise.resolve();
  }
}

module.exports = getPaymentTokenFromAPI;
