const config = require('./config.js');
const { Pool, Client } = require('pg');

const client = new Client(config);
const pool = new Pool(config);

const dbConnection = client.connect()
  .then( console.log('Postgres database connected') )
  .catch( e => console.error(e) );

module.exports = {
  pool: pool,
  dbConnection: dbConnection
};