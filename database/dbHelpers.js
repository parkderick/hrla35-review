const Pokemon = require('./index');

module.exports = {
  getAll: () => {
    return Pokemon.find()
   .then(data => data)
   .catch(err => console.log(err))
  },
  getType: (type) => {
    return Pokemon.find({type: type})
    .then(data => data)
    .catch(err => console.log(err))
  }
}