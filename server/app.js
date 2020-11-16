const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('../database/router.js');


app.use(express.static(__dirname + '/../dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/nearbyHomes', (req, res) => {
  router.getAllHomesFromDB((err, result) => {
    if (err) throw err;
    res.send(result);
  })
})

app.get('/api/nearbyHomes/city', (req, res) => {
  let city = 'pescadero';
  router.getCityHomesFromDB(city, (err, result) => {
    if (err) throw err;
    res.send(result);
  })
})

module.exports = app;
