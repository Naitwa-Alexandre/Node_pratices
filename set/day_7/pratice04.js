const fs = require('fs').promises;

const data = fs.readFile('./simpsons.json', 'utf8');


const getSimpsonById = async (SimpsonId) => {
  try {
    const simpsons = JSON.parse(await data);

    const simpson = simpsons.find(({ id }) => parseInt(id) === SimpsonId);

    if (!simpson) throw new Error("Id nao encontrado");

    console.log(`${ simpson.id }-${ simpson.name }`);
    
  } catch (err) {
    console.log(err)
  }
}

getSimpsonById(1);