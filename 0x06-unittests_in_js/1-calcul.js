module.exports = function calculateNumber(type, a, b) {
  const c = Math.round(a);
  const d = Math.round(b);

  if (type === 'SUM') {
    return c + d;
  }

  if (type === 'SUBTRACT') {
    return c - d;
  }

  if (type === 'DIVIDE') {
    return d === 0 ? 'Error' : c / d;
  }
  return 'Invalid operation type';
};
