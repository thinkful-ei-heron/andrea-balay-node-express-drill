/* eslint-disable no-console */
const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));

app.get('/sum', (req, res) => {
  const a = req.query.a;
  const b = req.query.b;
  const c = parseInt(a) + parseInt(b);
  
  const result = `The sum of ${a} and ${b} is ${c}.`;

  res.send(result);
});

app.listen(8000, () => {
  console.log('working!');
});