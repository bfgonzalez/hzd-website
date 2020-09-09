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

  // add cauldron to database
  create(request, response) {
    const {
      name,
      location,
      enemies,
      rewards,
      id,
      created_at,
      updated_at,
    } = request.body
    return models.cauldrons
      .create({
        name: name,
        location: location,
        enemies: enemies,
        rewards: rewards,
        id: id,
        created_at: created_at,
        updated_at: updated_at,
      })
      .then((cauldron) => response.json(cauldron))
      .catch((error) => console.log(error))
  },

  // update cauldron by id
  update(request, response) {
    const {
      name,
      location,
      enemies,
      rewards,
      id,
      created_at,
      updated_at,
    } = request.body
    return models.cauldrons
      .findOne({
        where: {
          id: request.params.id,
        },
      })
      .then((cauldron) => {
        if (!cauldron) {
          return response.status(400).send("Cauldron not found")
        }
        return cauldron
          .update({
            name: name,
            location: location,
            enemies: enemies,
            rewards: rewards,
            id: id,
            created_at: created_at,
            updated_at: updated_at,
          })
          .then(() => response.status(200).send(cauldron))
          .catch((error) => response.status(400).send(error.message))
      })
      .catch((error) => response.status(400).send(error.message))
  },

  // delete cauldron by id
  delete(request, response) {
    return models.cauldrons
      .findOne({
        where: {
          id: request.params.id,
        },
      })
      .then((cauldron) => {
        if (!cauldron) {
          return response.status(400).send("Cauldron not found")
        }
        return cauldron
          .destroy()
          .then(() =>
            response.status(200).send("Cauldron deleted successfully")
          )
          .catch((error) => response.status(400).send(error))
      })
      .catch((error) => response.status(400).send(error))
  },
}
