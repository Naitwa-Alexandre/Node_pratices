const express = require('express');
const cors = require('cors');
const bodyParse = require('body-parser');

const app = express();

app.use(bodyParse());
app.use(cors());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get('/validateToken', (req, res) => {
  const token = req.headers.authorization;
  
  if (token.length !== 16) return res.status(401).json({ message: 'Invalid token' });

  res.status(200).json({ message: 'Valid token'});
});

app.post('/recipes', (req, res) => {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price });

  res.status(201).json({ message: 'Recipe created sucessfully!' });
});

app.get('/drinks', (_req, res) => {
  res.status(200).json(drinks);
});

app.get('/drink/:id', (req, res) => {
  const { id } = req.params;
  const drink = drinks.find(d => d.id === +id);

  if (!drink) return res.status(404).json({ message: 'Drink not found!' });

  res.status(200).json(drink);
});

app.get('/drink/search', (req, res) => {
  const { name } = req.query;
  const drinksByName = drinks.filter(d => d.name.includes(name));

  if (!drinksByName) return res.status(404).json({ message: 'Drinks not found!' });

  res.status(200).json(drinksByName);
});

app.get('/recipes', (_req, res) => {
  res.json(recipes);
});

app.get('/recipes/search', (req, res) => {
  const { name, maxPrice, minPrice } = req.query;

  const filtredRecipes = recipes.filter(r => r.name.includes(name) && r.price < +maxPrice && r.price >= minPrice);

  if (!filtredRecipes) return res.status(404).json({ message: 'Recipe not found!' });

  res.status(200).json(filtredRecipes);
});


app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

app.listen(3001, () => {
  console.log('Application port: 3001');
});

