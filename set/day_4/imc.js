const readLine = require('readline-sync');

const name = readLine.question('Whats your name? ');
const weight = readLine.questionInt('Whats your weight? ');
const height = readLine.questionFloat('Whats your height? ');

const IMC = () => {
  const IMC = Math.floor(weight / (height * height)).toFixed(2);
  let condition = '';
  if (IMC < 18.5) {
    condition = 'thinness';
  } else if (IMC > 18.5 && IMC < 24.9) {
    condition = 'normal';
  } else if (IMC > 25 && IMC < 29.9) {
    condition = 'above weight';
  } else if (IMC > 30 && IMC < 34.9) {
    condition = 'Obesity I';
  } else if (IMC > 35 && IMC < 39.9) {
    condition = 'Obesity II';
  } else {
    condition = 'Obesity III e IV';
  }

  return `hello ${ name }, your condition is ${ condition } and weight is ${ IMC }`;
};

module.exports = IMC ;
