require("dotenv").config()

const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const history = require("connect-history-api-fallback")
const cookieParser = require("cookie-parser")

const app = express()
const port = process.env.PORT || 8080

const cors = require("cors")

require("./auth/auth")

app.use(cors())
app.use(history())

// serve static assets normally
app.use(express.static(path.resolve(__dirname, "../client/build/")))

// enable CORS
app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Methods", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next()
})

app.use(cookieParser())

// create a REST API by returning data from database in JSON format
app.use(bodyParser.json())

// setup routes, require routes into the application
require("./routes")(app)

// handle every other route with index.html
app.get("/", (request, response) => {
  let url = path.resolve(__dirname, "../client/build", "index.html")
  response.sendFile(url, (error) => {
    if (error) {
      console.log(error)
    }
  })
})

// start server
app.listen(port, (request, response) => {
  console.log(`server listening on port: ${port}`)
})
