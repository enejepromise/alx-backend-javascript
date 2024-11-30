const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

let consoleSpy;

describe(('payment method tests'), () => {
  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('should send right value', () => {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledOnceWithExactly(consoleSpy, 'The total is: 120');
  });

  it('should log right value', () => {
    sendPaymentRequestToApi(10, 10);
    sinon.assert.calledOnceWithExactly(consoleSpy, 'The total is: 20');
  });
