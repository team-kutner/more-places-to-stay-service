const { Pool, Client } = require('pg');
const client = new Client();

const pool = new Pool({
  host: 'localhost',
  user: 'mitchmcdermott',
  password: '',
  database: 'homesservice',
  port: 5432,
});

module.exports.pool = pool;