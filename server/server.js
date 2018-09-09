const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world, 123');
});

app.listen(3000);