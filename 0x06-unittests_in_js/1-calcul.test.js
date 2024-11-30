const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber test', () => {
  describe('sum test', () => {
    it('should add decimal numbers correctly', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });
  describe('subtract test', () => {
    it('should subtract whole numbers correctly', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
  });
  describe('divide test', () => {
    it('should divide decimal numbers correctly', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
    it('should not divide by zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });
});
