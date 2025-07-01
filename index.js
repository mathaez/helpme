const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const port = process.env.PORT_NO || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.render('index', { message: 'Bienvenue sur HelpMe !' });
});

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});

app.get('/liste-tickets', (req, res) => {
    res.render('liste-tickets');
  });
  