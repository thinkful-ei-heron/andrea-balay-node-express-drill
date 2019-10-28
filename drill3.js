/* eslint-disable no-console */
const express = require('express');
const app = express();

app.get('/lotto', (req, res) => {
  const numbers = req.query.numbers.map(num => parseInt(num));
  const min = Math.ceil(1);
  const max = Math.floor(20);
  const randomArr = [];
  for (let i = 1; i <= 6; i++) {
    let newNum = Math.floor(Math.random() * (max - min + 1)) + min;
    if (randomArr.includes(newNum)) {
      i--;
    } else {
      randomArr.push(newNum);
    }
  }

  const finalArr = [];
  numbers.forEach((e1) => randomArr.forEach((e2) => {
    if (e1 === e2) {
      finalArr.push(e1);
    }
  }));

  if (finalArr.length < 4) {
    res.send('sorry, you lose!');
  }

  if (finalArr.length === 4) {
    res.send('congratulations! you win a free ticket');
  }

  if (finalArr.length === 5) {
    res.send('congrats! you win 100 dollars');
  }

  if (finalArr.length === 6) {
    res.send('wow! unbelievable! you could have won the mega millions!');
  }
 

});

app.listen(8000, () => {
  console.log('working!');
});