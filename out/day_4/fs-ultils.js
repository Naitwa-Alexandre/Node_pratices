const fs = require('fs/promises');

function getSimpsons() {
  return fs.readFile('./simpsons.json', 'utf8')
    .then(fileContent => JSON.parse(fileContent));
};

function setSimpsons() {
  return fs.writeFile('./simpsons.json', 'utf8')
    .then(fileContent => JSON.stringify(fileContent));
};

module.exports = { getSimpsons, setSimpsons };
