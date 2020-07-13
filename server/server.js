const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

// setup route
app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, '../react-ui/build', 'index.html'));
});

// start server
app.listen(port, (request, response) => {
  console.log(`server listening on port: ${port}`);
});