const models = require("../models")

module.exports = {
  // machines api view which includes all fields
  list(request, response) {
    return models.machines
      .findAll()
      .then(response.json)
      .catch((error) => response.status(400).send(error.message))
  },
}
