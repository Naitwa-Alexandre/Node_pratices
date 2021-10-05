const app = require('express')();
const bodyParse = require('body-parser');

const PORT = 3000;

app.use(bodyParse.json( ));

const langs = ['JAVASCRIPT', 'PYTHON', 'RUBY', 'C#'];
const drinks = [{id: 1, name: 'CACHASSA'}, {id: 2, name: 'GIN'}, {id: 3, name: 'RUN'}, {id: 4, name: 'CATUABA'}];


app.get('/', (_req,  res) => {
  res.status(200).json({ message: 'Hello World, cade Minerva rapaz? '})
});

app.get('/drinks', (_req, res) => {
  res.status(200).json(drinks);
});

app.get('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const drink = drinks.filter(d => d.id === +id);

  if (!drink.length) return res.status(404).json({ message: 'Drink not found!' });

  res.status(200).json(drink);
});

app.put('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const drinkIndex = drinks.findIndex(d => d.id === +id);

  if (drinkIndex === -1) return res.status(404).json({ message: 'Drink not found!' });

  drinks[drinkIndex] = { ...drinks[drinkIndex], name };

  res.status(204).end();
});

app.delete('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const drinkIdx = drinks.findIndex((d) => d.id === +id);

  if (drinkIdx === -1) return res.status(404).json({ message: 'Drink not found!' });
  
  drinks.splice(drinkIdx, 1);

  res.status(204).end();
});

app.post('/drinks', (req, res) => {
  const { drink } = req.body;
  if (!drink) return res.status(404).json({ message: 'Invalid drink' });
  drinks.push(drink);

  res.status(200).json({ message: `${ drink } added successfully! `});
});

app.post('/langs', (req, res) => {
  const { language } = req.body;
  if (!language) return res.status(404).json({ message: 'Error trying to add language ' });
  langs.push(language);
  res.status(200).send({ message: 'Language added successfully! '});
});

app.get('/langs', (_req, res) => {
  res.status(200).send(langs);
});

app.all('*', (req, res) => {
  return res.status(404).json({ message: `Route ${ req.path } doesnt exist!` });
});

app.listen(PORT, () => console.log(`App listening on port: ${ PORT }`));
