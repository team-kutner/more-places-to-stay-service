const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('../database/router.js');


app.use(express.static(__dirname + '/../dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/nearbyHomes', (req, res) => {
  router.getAllHomesFromDB((err, result) => {
    if (err) {
      console.log('error: ', error);
      res.send('error occurred');
    }
    res.send(result);
  })
})

app.get('/api/nearbyHomes/:id', (req, res) => {
  const ID = Number(req.params.id);
  router.getNearbyFromID(ID, (err, result) => {
    if (err) {
      console.log('error: ', error);
      res.send('error occurred');
    }
    router.getCityHomesFromDB(result[0].city, ID, (err, results) => {
          if (err) throw err;
          res.send(results);
    })
  })
})


module.exports = app;
