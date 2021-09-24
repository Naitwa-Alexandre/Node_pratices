const readLine = require('readline-sync');

const velocidade = readLine.question('Qual a velocidade do veiculo? ');
const tempo = readLine.questionInt('Quanto tempo levou o veiculo no trageto? ');

const avarageSpeed = () => {
  const avrSpeed = (velocidade / tempo).toFixed(2);

  return `A velocidade media durante a corrida foi de ${ avrSpeed }km/h`
}

console.log(avarageSpeed());
