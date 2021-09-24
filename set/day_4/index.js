const readLine = require('readline-sync');

console.log('-----------------------------------------------------------');
console.log('Escolha um programa IMC[1], SORTEIO[2], VELOCIDADE[3], FIBONACCI[4]');

const program = readLine.questionInt('Digite um numero: ');


if (program === 1) {
  const IMC = require('./imc');
} else if (program === 2) {
  const SORTEIO = require('./sorteio');
} else if (program === 3) {
  const VELOCIDADE = require('./velocidade');
} else if (program === 4) {
  const FIBONACCI = require('./fibonacci');
} else {
  console.log('[ ERROR ] Escolha um numero valido');
};
