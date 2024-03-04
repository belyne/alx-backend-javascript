// 5-payment.test.js
const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;

  beforeEach(() => {
    // Create a spy for console.log before each test
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the spy after each test
    consoleLogSpy.restore();
  });

  it('should log the correct message for totalAmount = 100, totalShipping = 20', () => {
    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Assert that console.log was called with the correct message
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  it('should log the correct message for totalAmount = 10, totalShipping = 10', () => {
    // Call the function
    sendPaymentRequestToApi(10, 10);

    // Assert that console.log was called with the correct message
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
});
