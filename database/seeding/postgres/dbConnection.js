const config = require('./config.js');
const { Pool, Client } = require('pg');


const pool = new Pool({
  host: 'localhost',
  user: 'mitchmcdermott',
  password: 'mitch',
  database: 'homesservice',
  port: 5432,
});

module.exports = { pool: pool };