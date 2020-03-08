const Pokemon = require('./index');

module.exports = {
  getAll: () => {
    return Pokemon.find()
     .then(data => data)
     .catch(err => console.log(err))
  },
  getType: type => {
    return Pokemon.find({type: type})
      .then(data => data)
      .catch(err => console.log(err))
  },
  updateName: req => {
    return Pokemon.findOneAndUpdate({id: req.params.id}, {name: req.body.name})
      .then(() => console.log(`Success updating pokemon at id ${req.params.id}`))
      .catch(err => console.log(err))
  },
  deletePokemon: req => {
    return Pokemon.remove({id: req.params.id})
      .then(() => console.log(`Success deleting pokemon at id ${req.params.id}`))
      .catch(err => console.log(err))
  },
  postPokemon: req => {
    return Pokemon.create(req.body)
      .then(() => console.log(`Success posting pokemon at id ${req.params.id}`))
      .catch(err => console.log(err))
  }
}