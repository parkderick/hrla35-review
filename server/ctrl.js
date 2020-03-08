const model = require("../database/model");

module.exports = {
  getAll: (req, res) => {
    model
      .getAll()
      .then(data => res.status(200).send(data))
      .catch(err => res.status(400).send(err));
  },
  getByType: (req, res) => {
    model
      .getByType(req.params.type)
      .then(data => res.status(200).send(data))
      .catch(err => res.status(400).send(err));
  },
  updateName: (req, res) => {
    console.log(req.body)
    model
      .updateName(req.params.id, req.body.data)
      .then(() => res.status(200).send())
      .catch(err => res.status(400).send(err));
  }
};
