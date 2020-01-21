const express = require('express');

const drills = express();

drills.get('/', (req, res) => {
  res.send('Hello Express!');
});

drills.get('/sum', (req, res) => {

  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if(!a || !b) {
    return res.status(400).send('Please provide them numbers');
  }
  
  const sum = a + b;
  const response = `The sum of ${a} + ${b} = ${sum}`;

  res.send(response);
});



drills.listen(8000, () => {
  console.log('Express server is listening on port 8000!');
});