/* eslint-disable no-console */
/* eslint-disable strict */
const express = require('express');
const app = express();

app.get('/cipher', (req, res) => {
  const text = req.query.text;
  const shift = req.query.shift;
 
  const textArr = text.split('');
  let result = textArr.map(letter => {
    const num = parseInt(shift);
    const letterNum = letter.charCodeAt(0);
    if(letterNum === 90){
      return String.fromCharCode(65);
    }
    return String.fromCharCode(letterNum + num);  
  });

  res.send(result.join('')); 
});

app.listen(8000, () => {
  console.log(String.fromCharCode(65));
});