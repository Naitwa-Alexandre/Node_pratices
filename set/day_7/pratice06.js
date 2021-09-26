const fs = require('fs').promises;

const createNewFile = async () => {
  try {
    const characters = [1, 2, 3, 5];  
    
    const simpsons = await fs.readFile('./simpsons.json', 'utf8');

    const newFile = JSON.parse(simpsons).filter(({ id }) => characters.includes(+id));

    await fs.writeFile('simpsonFamily.json', JSON.stringify(newFile))
      .then(() => console.log('save sucessful'))
      .catch((err) => console.log(err));

  } catch (error) {
    console.log(error);
  }
}

createNewFile();