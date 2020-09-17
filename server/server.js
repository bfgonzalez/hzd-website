require("dotenv").config()

const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const history = require("connect-history-api-fallback")
const passport = require("passport")
const expressSession = require("express-session")
const cookieParser = require("cookie-parser")
const flash = require("connect-flash")

const app = express()
const port = process.env.PORT || 8080

const cors = require("cors")

app.use(cors())
app.use(history())

// serve static assets normally
app.use(express.static(path.resolve(__dirname, "../client/build/")))

// enable CORS
app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*")
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  response.header("Content-Type", "application/json")
  next()
})

app.use(cookieParser())

// create a REST API by returning data from database in JSON format
app.use(bodyParser.json())

// setup session and passport
// app.use(expressSession({ secret: process.env.SECRET_KEY }))

// app.use(passport.initialize())
// app.use(passport.session({ secret: process.env.SECRET_KEY }))

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
