const readLine = require('readline-sync');

const number = readLine.questionInt('Escolha seu numero da sorte entre 0 a 10: ');

const randomNumber = () => Math.floor(Math.random() * number);

console.log(`O numero da sorte eh ${randomNumber()}`);
