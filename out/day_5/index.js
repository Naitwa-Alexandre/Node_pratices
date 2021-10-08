const app = require('express')();
const bodyParse = require('body-parser');
const validatePrice = require('./validatePrice');

app.use(bodyParse.json());
const PORT = 3001;

const recipes = [{ id: 1, name: 'Soap', price: 20 }, { id: 2, name: 'Beans', price: 10 }, { id: 3, name: 'Rice', price: 5 }];

app.get('/recipes', (_req, res) => {
  res.status(200).json(recipes);
});

app.post('/recipes', (req, res, next) => {
  const { name } = req.body;
  if (!name || name === '') return res.status(400).json({ message: 'Invalid data!' });

  next();
},
(req, res) => {
  const { id, name, price } = req.body;
  validatePrice(price);
  recipes.push({ id, name, price });
  res.status(200).json({ message: 'Recipe created successfully!' });
});

app.put('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  validatePrice(price);
  const recipeIndex = recipes.findIndex(r => r.id === +id);

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});

app.all('*', (_req, res) => {
  res.status(404).json({ message: 'Route not found!' });
});

app.listen(PORT, console.log(`Port running: ${ PORT }`));
