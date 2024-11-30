const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('test async operation', () => {
  it('should return a promise', (done) => {
    getPaymentTokenFromAPI(true).then((result) => {
      expect(result).to.deep.equal({ data: 'Successful response from the API' });
      done();
    })
      .catch((err) => done(err));
  });
