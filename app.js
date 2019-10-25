const express = require('express');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/login', (req, res, next) => {
  res.render('login');
});

app.post('/login', (req, res, next) => {
  console.log(req.body);
  res.send('Posted form');
});

app.listen(3000, () => {
  console.log('Express app up at http://localhost:3000');
});
