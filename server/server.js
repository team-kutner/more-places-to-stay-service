const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const db = require('../database/dbConnection.js');


app.use(express.static(__dirname + '/../dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/homes', (req, res) => {
  console.log('successful get');
  res.send('successful get');
})

app.listen(port, () => {
  console.log(`your server is running listening at http://localhost:${port}`)
})