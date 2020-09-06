const models = require("../models")

module.exports = {
  // list all cauldrons in database (excluding created_at & updated_at)
  list(request, response) {
    return models.cauldrons
      .findAll({
        order: [["id", "ASC"]],
        attributes: ["id", "name", "location", "enemies", "rewards"],
      })
      .then((cauldrons) => response.status(200).send(cauldrons))
      .catch((error) => response.status(400).send(error.message))
  },
}
