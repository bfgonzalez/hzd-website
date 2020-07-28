const machinesController = require('../controllers').machines;

// setup endpoints
module.exports = (app) => {
  app.get('/api/machines', machinesController.list)
  app.post('/api/machines', machinesController.create);
}