const fs = require('fs').promises;

fs.readFile('./simpsons.json', 'utf8')
  .then((response) => {
    console.log(JSON.parse(response));
    return JSON.parse(response);
  })
  .then((simpsons) => {
    return simpsons.map((simpson) => `${ simpson.id }-${ simpson.name }`);
  })
  .then((strings) => strings.forEach(string => console.log(string)));
