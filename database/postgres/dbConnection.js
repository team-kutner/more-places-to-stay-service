const config = require('./config.js');
const { Pool, Client } = require('pg');
require('ligma');

const pool = new Pool(config);

const dbConnection = pool.connect()
  .then( console.log('Postgres database connected') )
  .catch( e => console.error(e) );

module.exports = {
  pool: pool,
  dbConnection: dbConnection
};