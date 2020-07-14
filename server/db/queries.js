// declare database connection
const Pool = require('pg').Pool

const pool = new Pool({
  connectionString : process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const getMachines = (request, response) => {
  pool.query('SELECT * FROM machines', (error, results) => {
    if (error) {
      console.log(error)
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
  pool,
  getMachines
};