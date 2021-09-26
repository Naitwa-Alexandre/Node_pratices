const fs = require('fs').promises;

const fileData = fs.readFile('./simpsons.json', 'utf8');

const handleData = async () => {
  try {
    const data = await fileData;
    const simpsons = JSON.parse(data).map(({ id, name }) => `${ id }-${ name }`);
    simpsons.forEach((simpson) =>  console.log(simpson));
  } catch (err) {
    console.error(err);
  }
}
handleData();
