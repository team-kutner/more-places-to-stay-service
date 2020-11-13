const dbConnection = require('./dbConnection');

var getAllHomesFromDB = (callback) => {
  var queryStr = 'SELECT * FROM homes';
  dbConnection.query(queryStr, callback);
};

var getCityHomesFromDB = (city, callback) => {
  var queryStr = `SELECT * FROM homes WHERE city = '${city}' LIMIT 12`;
  dbConnection.query(queryStr, callback);
}

module.exports = {
  getAllHomesFromDB,
  getCityHomesFromDB
}

