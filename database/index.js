const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pokemon', {useNewUrlParser: true})
.then(() => {
  console.log('Connection to database pokemon established')
})
.catch(err => {
  console.log(`Error connecting to database ${err.message}`)
})

var Schema = new mongoose.Schema({
  id: String, 
  name: String,
  type: String,
  img: String
});

var Pokemon = mongoose.model('Poke', Schema);

module.exports = Pokemon;