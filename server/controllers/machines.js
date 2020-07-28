const models = require('../models');

module.exports = {
  // add machine to database
  create(request, response) {
    const { name, size, origin, override, machine_class, machine_sites, weakness, strength, weak_points, id, created_at, updated_at } = request.body;
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
        id: id,
        created_at: created_at,
        updated_at: updated_at
      })
        .then(machine => response.json(machine))
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
};