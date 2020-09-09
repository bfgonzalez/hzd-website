const machinesController = require("../controllers/machines")
const cauldronsController = require("../controllers/cauldrons")
const api = require("../controllers/views")

// setup endpoints
module.exports = (app) => {
  // machines
  app.get("/api/machines", machinesController.list)
  app.get("/api/views/machines", api.list)
  app.get("/api/machines/id/:id", machinesController.retrieve)
  app.get("/api/machines/filter", machinesController.filterList)
  app.post("/api/machines", machinesController.create)
  app.put("/api/machines/:id", machinesController.update)
  app.delete("/api/machines/:id", machinesController.delete)

  // cauldrons
  app.get("/api/cauldrons", cauldronsController.list)
  app.post("/api/cauldrons", cauldronsController.create)
}
