const chai = require('chai');
const calculateNumber = require('./2-calcul_chai');
const expect = chai.expect;

describe('calculateNumber test', () => {
  describe('sum test', () => {
    it('should add decimal numbers correctly', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });
  describe('subtract test', () => {
    it('should subtract whole numbers correctly', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });
  describe('divide test', () => {
    it('should divide decimal numbers correctly', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
    it('should not divide by zero', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });
});
