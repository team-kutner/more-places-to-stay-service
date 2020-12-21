/* eslint-disable camelcase */
require('dotenv').config();

module.exports = {
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  port: process.env.PG_PORT,
  db_URI: process.env.PG_DB_URI
};