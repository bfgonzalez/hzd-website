const machinesController = require("../controllers/machines")
const cauldronsController = require("../controllers/cauldrons")


// setup endpoints
module.exports = (app) => {
  // machines
  app.get("/api/machines", machinesController.list)
  app.get("/api/machines/id/:id", machinesController.retrieve)
  app.get("/api/machines/filter", machinesController.filter)
  app.post("/api/machines", machinesController.create)
  app.put("/api/machines/:id", machinesController.update)
  app.delete("/api/machines/:id", machinesController.delete)

  // cauldrons
  app.get("/api/cauldrons", cauldronsController.list)
  app.get("/api/cauldrons/id/:id", cauldronsController.retrieve)
  app.get("/api/cauldrons/filter", cauldronsController.filter)
  app.post("/api/cauldrons", cauldronsController.create)
  app.put("/api/cauldrons/:id", cauldronsController.update)
  app.delete("/api/cauldrons/:id", cauldronsController.delete)
}
