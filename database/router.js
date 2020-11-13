const dbConnection = require('./dbConnection');

var getAllHomesFromDB = (callback) => {
  var queryStr = 'SELECT * FROM homes';
  dbConnection.query(queryStr, callback);
};

module.exports = {
  getAllHomesFromDB
}

