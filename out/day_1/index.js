const express = require('express');

const app = express();

app.get('/', (_req, res) => {
  res.status(200).send('rero uord');
});

app.post('/', (_req, res) => {
  res.status(200).send('hello world');
});

app.put('/', (_req, res) => {
  res.status(200).send('hello world');
});

app.delete('/', (_req, res) => {
  res.status(200).send('hello world');
});


app.all('/home', (_req, res) => {
  res.status(200).send('hello world');
});

app
  .route('/get')
  .get((_req, res) => {
    res.status(200).send('hello world get');
  })
  .post((_req, res) => {
    res.status(200).send('hello world post');
  });

app.listen(3001, () => {
  console.log('Application listening port: 3001');
});
