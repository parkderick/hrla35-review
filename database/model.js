const schema = require("./schema");

module.exports = {
  getAll: () => schema.find({}),
  getByType: type => schema.find({ type: type }),
  updateName: (id, name) => schema.findOneAndUpdate({ id: id }, { name: name })
};
