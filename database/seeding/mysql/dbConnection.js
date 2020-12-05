const mysql2 = require('mysql2');
const config = require('./config.js');

const dbConnection = mysql2.createConnection(config);

module.exports = dbConnection;
