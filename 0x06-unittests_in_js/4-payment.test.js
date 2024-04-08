const chai = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils-0');

describe('sendPaymentRequestToApi', function() {
  let consoleSpy;

  beforeEach(function() {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    consoleSpy.restore();
  });

  it('should call Utils.calculateNumber with correct arguments and log the correct message', function() {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const type = 'SUM';
    const a = 100;
    const b = 20;
    sendPaymentRequestToApi(a, b);

    chai.expect(calculateNumberStub.calledOnceWithExactly(type, a, b)).to.be.true;
    chai.expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;

    calculateNumberStub.restore();
  });
});
