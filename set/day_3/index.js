const readLine = require('readline-sync');

const name = readLine.question('Whats your name ?');
const age = readLine.questionInt('Whats your age ?');

console.log(`hello ${ name },   you a dumbass bitch aged ${ age }`);
