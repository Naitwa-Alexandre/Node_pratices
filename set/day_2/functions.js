function somar(n1, n2) {
  return n1 + n2;
};

function subtrair(n1, n2) {
  return n1 - n2;
};

function multiplicar(n1, n2) {
  return n1 * n2;
};

function dividir(n1, n2) {
  return n1 / n2;
};

function IsOdd(Number) {
  const result = Number % 2;
  return result === 0 ? 'Is Odd' : 'Is Even';
};

module.exports = {somar, subtrair,multiplicar, dividir, IsOdd};
