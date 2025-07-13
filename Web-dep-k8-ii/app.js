const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello from this NodeJS app By Sadiq</h1>
    <p>Try sending a request to /error and see what happens</p>
    <p>Note this is just a demo app</p>
  `);
});

app.get('/error', (req, res) => {
  process.exit(1);
});

app.listen(8080);
