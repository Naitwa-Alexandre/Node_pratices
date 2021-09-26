const fs = require('fs').promises;

const addCharacter = async () => {

  try {
    const simpsonFamily = await fs
      .readFile('./simpsonFamily.json', 'utf8')
      .then((contentFile) => JSON.parse(contentFile));

    simpsonFamily.push({ "id": "8","name": "Nelson Muntz" });
    
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonFamily));

    console.log('character saved');

  } catch (err) {
    
    console.log(err);
  }
}

addCharacter();