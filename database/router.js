const dbConnection = require('./dbConnection');

const getAllHomesFromDB = (callback) => {
  let queryStr = 'SELECT * FROM homes';
  dbConnection.query(queryStr, callback);
};

const getCityHomesFromDB = (city, ID, callback) => {
  let queryStr = `SELECT * FROM homes WHERE (city = '${city}' AND ID != '${ID
  }') LIMIT 12`;
  dbConnection.query(queryStr, callback);
}

const getNearbyFromID = (ID, callback) => {
  let queryStr = `SELECT city FROM homes WHERE id = '${ID}'`;
  dbConnection.query(queryStr, callback);
}

module.exports = {
  getAllHomesFromDB,
  getCityHomesFromDB,
  getNearbyFromID
}

