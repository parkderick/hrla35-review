const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const port = 3000;
const app = express();

const dbHelper = require('../database/dbHelpers.js')
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static(__dirname + '../../client/dist'));

app.listen(port, () => console.log(`Connected to port ${port}`));

app.get('/pokemons', (req, res) => {
  dbHelper.getAll()
  .then((data) => res.status(200).send(data))
  .catch(() => res.status(404).send('ERROR retrieving all pokemons'))
})

app.get('/pokemons/:id', (req, res) => {
  dbHelper.getType(req.params.id)
  .then((data) => res.status(200).send(data))
  .catch(() => res.status(404).send(`ERROR retrieving pokemons for type ${req.params.id}`))
})
  
app.put('/pokemons/:id', (req, res) => {
  dbHelper.updateName(req)
  .then((data) => res.status(200).send(`Success updating pokemons for id ${req.params.id}`))
  .catch(() => res.status(404).send(`ERROR updating pokemons for id ${req.params.id}`))
})
  
app.delete('/pokemons/:id', (req, res) => {
  dbHelper.deletePokemon(req)
  .then(() => res.status(200).send(`Success updating pokemons for id ${req.params.id}`))
  .catch(() => res.status(404).send(`ERROR updating pokemons for id ${req.params.id}`))
})

app.post('/pokemons', (req, res) => {
  dbHelper.postPokemon(req)
  .then(() => res.status(200).send(`Success posting pokemons for id ${req.params.id}`))
  .catch(() => res.status(404).send(`ERROR posting pokemons for id ${req.params.id}`))
})
  
  