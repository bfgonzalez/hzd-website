require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

const cors = require('cors');

app.use(cors())

// serve static assets normally
app.use(express.static(path.resolve(__dirname, '../client/build')));

// enable CORS
app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  response.header('Content-Type', 'application/json');
  next();
})

// create a REST API by returning data from database in JSON format
app.use(bodyParser.json())

// setup routes, require routes into the application
require('./routes')(app);
// handle every other route with index.html
app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// start server
app.listen(port, (request, response) => {
  console.log(`server listening on port: ${port}`);
});