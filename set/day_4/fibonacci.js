const readLine = require('readline-sync');

const num = readLine.questionInt('Insira um numero para o calculo fibonacci: ');

function FIBONACCI(num) {
  if (num <= 1) return 1;

  return FIBONACCI(num - 1) + FIBONACCI(num - 2);
}


console.log(FIBONACCI(num));

module.exports = FIBONACCI;
