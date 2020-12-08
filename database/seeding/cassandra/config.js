const { Pool, Client } = require('pg');
const client = new Client();

const pool = new Pool({
  contactPoints: ['localhost'],
  localDataCenter: 'datacenter1',
  keyspace: 'homesservice',
  port: 9042,
});

module.exports.pool = pool;