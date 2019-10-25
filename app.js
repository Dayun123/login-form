const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded());

app.set('view engine', 'ejs');

app.get('/login', (req, res, next) => {
  
  let errorMsg = '';

  if (req.query.loginError) {
    errorMsg = 'Invalid login credentials, please try again!';
  }

  res.render('login', {
    errorMsg
  });
  
});

app.post('/login', (req, res, next) => {
  if (req.body.username === 'u' && req.body.password === 'p') {
    res.redirect('/welcome');
  } else {
    res.redirect('/login?loginError=true');
  }
});

app.get('/welcome', (req, res, next) => {
  res.send('Successful Login. Welcome!');
});

app.listen(3000, () => {
  console.log('Express app up at http://localhost:3000');
});
