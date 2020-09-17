const models = require("../models")

module.exports = {
  // list all machines in database (excluding create_at & updated_at)
  list(request, response) {
    return models.machines
      .findAll({
        order: [["id", "ASC"]],
        attributes: [
          "id",
          "name",
          "size",
          "origin",
          "override",
          "machine_class",
          "machine_sites",
          "weakness",
          "strength",
          "weak_points",
          "explosive_components",
        ],
      })
      .then((machines) => response.status(200).send(machines))
      .catch((error) => response.status(400).send(error.message))
  },

  // retrieve machine by id
  retrieve(request, response) {
    return models.machines
      .findOne({
        where: {
          id: request.params.id,
        },
      })
      .then((machine) => response.status(200).send(machine))
      .catch((error) => response.status(400).send(error.message))
  },

  // filter list based on query params
  filter(request, response) {
    return models.machines
      .findAll({
        where: request.query,
        order: [["id", "ASC"]],
      })
      .then((machines) => response.status(200).send(machines))
      .catch((error) => response.status(400).send(error.message))
  },

  // add machine to database
  create(request, response) {
    const {
      name,
      size,
      origin,
      override,
      machine_class,
      machine_sites,
      weakness,
      strength,
      weak_points,
      explosive_components,
      id,
      created_at,
      updated_at,
    } = request.body
    return models.machines
      .create({
        name: name,
        size: size,
        origin: origin,
        override: override,
        machine_class: machine_class,
        machine_sites: machine_sites,
        weakness: weakness,
        strength: strength,
        weak_points: weak_points,
        explosive_components: explosive_components,
        id: id,
        created_at: created_at,
        updated_at: updated_at,
      })
      .then((machine) => response.json(machine))
      .catch((error) => console.log(error))
  },

  // update machine by id
  update(request, response) {
    const {
      name,
      size,
      origin,
      override,
      machine_class,
      machine_sites,
      weakness,
      strength,
      weak_points,
      explosive_components,
      id,
      created_at,
      updated_at,
    } = request.body
    return models.machines
      .findOne({
        where: {
          id: request.params.id,
        },
      })
      .then((machine) => {
        if (!machine) {
          return response.status(400).send("Machine not found")
        }
        return machine
          .update({
            name: name,
            size: size,
            origin: origin,
            override: override,
            machine_class: machine_class,
            machine_sites: machine_sites,
            weakness: weakness,
            strength: strength,
            weak_points: weak_points,
            explosive_components: explosive_components,
            id: id,
            created_at: created_at,
            updated_at: updated_at,
          })
          .then(() => response.status(200).send(machine))
          .catch((error) => response.status(400).send(error.message))
      })
      .catch((error) => response.status(400).send(error.message))
  },

  // delete machine based on given id
  delete(request, response) {
    return models.machines
      .findOne({
        where: {
          id: request.params.id,
        },
      })
      .then((machine) => {
        if (!machine) {
          return response.status(400).send("Machine not found")
        }
        return machine
          .destroy()
          .then(() => response.status(200).send("Machine deleted successfully"))
          .catch((error) => response.status(400).send(error))
      })
      .catch((error) => response.status(400).send(error))
  },
}
