const machinesController = require('../controllers').machines;
const api = require('../controllers/views');

// setup endpoints
module.exports = (app) => {
  app.get('/api/machines', machinesController.list);
  app.get('/api/views/machines', api.list);
  app.post('/api/machines', machinesController.create);
}