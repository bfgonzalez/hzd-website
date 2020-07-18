// declare database connection
const Pool = require('pg').Pool

const pool = new Pool({
  connectionString : process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// get list of machines from database
const getMachines = (request, response) => {
  pool.query('SELECT * FROM machines', (error, results) => {
    if (error) {
      console.log(error)
    }
    response.status(200).json(results.rows)
  })
}

// add a machine to database
const addMachine = (request, response) => {
  const { name, origin, size, override, machine_class, machine_sites, weakness, strength, weak_points } = request.body;
  pool.query("INSERT INTO machines (name, size, origin, override, machine_class, machine_sites, weakness, strength, weak_points) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)", (error, results) => {
    if (error) {
      console.log(error)
    }
    response.status(201).send(`${request.body.name} has been added to the machines database`);
  })
}

module.exports = {
  pool,
  getMachines,
  addMachine
};