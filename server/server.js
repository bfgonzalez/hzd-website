require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const db = require('./db/queries');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.resolve(__dirname, '../client/build')));

// setup routes
app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// create a REST API by returning data from database in JSON format
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true,
}))

// set endpoints
app.get('/machines', db.getMachines)

// start server
app.listen(port, (request, response) => {
  console.log(`server listening on port: ${port}`);
});