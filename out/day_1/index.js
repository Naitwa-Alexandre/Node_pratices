const express = require('express');

const app = express();

app.get('/', (_req, res) => {
  res.status(200).send('LOOKS LIKE YEAH');
});

app.listen(3001, () => {
  console.log('Application listening port: 3001');
});