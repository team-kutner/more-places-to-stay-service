const mysql2 = require('mysql2');
const config = require('./config.js');

const dbConnection = mysql2.createConnection(config)
  .then( console.log('Postgres database connected') )
  .catch( e => console.error(e) );

module.exports = dbConnection;
