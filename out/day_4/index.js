const app = require('express')();
const bodyParse = require('body-parser');

const simpsonsUtils = require('./fs-ultils');

app.use(bodyParse.json());
const PORT = 3000;

app.get('/ping', (_req, res) => {
  return res.status(200).json({ message: 'pong' });
});

app.put('/hello', (req, res) => {
  const { name } = req.body;

  if (!name) return res.status(404).json({ message: 'Invalid name' });

  return res.status(200).json({ message: `Hello ${ name }`});
});

app.put('/greetings', (req, res) => {
  const { name, age } = req.body;

  if (+age < 17) return res.status(401).json({ message: 'Unauthorized' });

  res.status(200).json({ message: `Hello ${ name }` });
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;

  res.status(200).json({ message: `Seu nome eh ${ name } e vc tem ${ age } anos de idade `});
});

app.get('/simpsons', async(_req, res) => {
  const simpsons = await simpsonsUtils.getSimpsons();

  res.status(200).json(simpsons);
});

app.get('/simpsons/:id', async(req, res) => {
  const { id } = req.params;
  const simpsons = await simpsonsUtils.getSimpsons();
  const simpson = simpsons.find(s => +s.id === +id);

  if (!simpson) return res.status(404).json({ message: 'simpson not found!' });

  res.status(200).json(simpson);
});

/* ... */

app.post(
  '/simpsons',
  async (req, res) => {
    const { id, name } = req.body;

    const simpsons = await simpsonsUtils.getSimpsons();

    if (simpsons.map(({ id }) => id).includes(id)) {
      return res.status(409).json({ message: 'id already exists' });
    }

    simpsons.push({ id, name });

    await simpsonsUtils.setSimpsons(simpsons);

    res.status(204).end();
  }
);

/* ... */

app.all('*', (req, res) => {
  return res.status(404).json({ message: `Route ${ req.path } invalid` });
});

app.listen(PORT, () => console.log(`Listening port: ${ PORT }`))