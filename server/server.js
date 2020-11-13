const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const router = require('../database/router.js');


app.use(express.static(__dirname + '/../dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/homes', (req, res) => {
  console.log('successful get');
  router.getAllHomesFromDB((err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  })
})

app.listen(port, () => {
  console.log(`your server is running listening at http://localhost:${port}`)
})