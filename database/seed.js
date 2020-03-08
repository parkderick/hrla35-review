const model = require("./schema");
const data = require("../pokemon.json");

model.insertMany(data, err => {
  if (err) console.log(err);
  else console.log("seeding done");
});

// model
//   .insertMany(data)
//   .then(() => console.log("seeding done"))
//   .catch(err => console.log(err));
