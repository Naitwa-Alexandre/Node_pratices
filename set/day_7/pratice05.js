const fs = require('fs').promises;

const removeCharacters = async () => {
  const TEN = 10;
  const SIX = 6;
  try {
    const data = await fs.readFile('./simpsons.json', 'utf8');
    const simpsons = JSON.parse(data);
    const simpsonsRemain = simpsons.filter(({ id }) => parseInt(id) !== TEN && parseInt(id) !== SIX);
    await fs.writeFile('./simpsons.json', JSON.stringify(simpsonsRemain));
    console.log(simpsonsRemain);
  } catch (err) {
    console.log(err);
  }
}

removeCharacters();