const db = require("./index");
const mongoose = require("mongoose");
var pokeSchema = new mongoose.Schema({
  id: Number,
  name: String,
  type: String,
  img: String
});

var Poke = mongoose.model("Poke", pokeSchema);

module.exports = Poke;
