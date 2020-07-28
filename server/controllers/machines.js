const models = require('../models');

module.exports = {
  // add machine to database
  create(request, response) {
    return models.machines
      .create({
        name: request.body.name,
        size: request.body.size,
        origin: request.body.origin,
        override: request.body.override,
        machine_class: request.body.machine_class,
        machine_sites: request.body.machine_sites,
        weakness: request.body.weakness,
        strength: request.body.strength,
        weak_points: request.body.weak_points,
        id: request.body.id,
        created_at: request.body.created_at,
        updated_at: request.body.updated_at
      })
        .then(machine => response.status(201).send(machine))
        .catch(error => response.status(400).send(error.message));
  },

  // list all machines in database
  list(request, response) {
    return models.machines
      .findAll({
        attributes: ['name', 'size', 'origin', 'override', 'machine_class', 'machine_sites', 'weakness', 'strength', 'weak_points', 'id', 'created_at', 'updated_at']
      })
      .then(machines => response.status(200).send(machines))
      .catch(error => response.status(400).send(error.message))
  },

  // update existing machine in database
  // update(request, response) {
  //   return models.machines
  //     .
  // }
};