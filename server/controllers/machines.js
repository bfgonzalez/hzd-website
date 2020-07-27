const models = require('../models');

module.exports = {
  // add machine to database
  create(request, response) {
    return models.machines
      .create(request.body)
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
  }
};