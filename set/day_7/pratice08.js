const fs = require('fs').promises;


const replaceChar = async () => {
  try {
    const simpsonFamily = await fs
      .readFile('./simpsonFamily.json', 'utf8')
      .then((contentFile) => JSON.parse(contentFile));

    const newArray = simpsonFamily.filter(
      (simpson) => simpson.name !== 'Nelson Muntz' && simpson.name !== 'Nelson Munt');

    newArray.push({ "id": "8", "name":"Marggie Willians"});

    await fs.writeFile('./simpsonFamily.json', JSON.stringify(newArray));

  } catch (err) {
    console.log(err);
  }
}

replaceChar();