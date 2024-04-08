module.exports = {
  calculateNumber(type, a, b) {
    if (type === 'SUM') return a + b;
    if (type === 'SUBTRACT') return a - b;
    if (type === 'DIVIDE') return b === 0 ? 'Error' : a / b;
  }
};
