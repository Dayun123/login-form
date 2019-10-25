const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/login', (req, res, next) => {
  res.send('Login Page');
});

app.listen(3000, () => {
  console.log('Express app up at http://localhost:3000');
});
