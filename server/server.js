const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
// const database = require('./database/database.js');


app.use(express.static(__dirname + '/../dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/homes', (req, res) => {
  console.log('successfull get');
  res.send('successfull get');
  // var queryStr = 'SELECT * FROM cows';
  // database.query(queryStr, (err, result) => {
  //   if (err) throw err;
  //   console.log('result: ', result);
  //   res.send(result);
  // })
})

app.listen(port, () => {
  console.log(`your server is running listening at http://localhost:${port}`)
})