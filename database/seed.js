const data = require('../pokemon.json');
const Pokemon = require('./index.js');

// Seed Database with pokemons (pokemon.json)
Pokemon.insertMany(data)
  .then(() => console.log('Success seeding pokemons'))
  .catch(() => console.log('Failed to seed pokemons'));
