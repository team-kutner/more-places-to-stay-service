const dbConnection = require('./dbConnection');

var getAllHomesFromDB = (callback) => {
  var queryStr = 'SELECT * FROM homes';
  dbConnection.query(queryStr, callback);
};

var addHomeToDB = (homeObject, callback) => {
  const {img_url, home_type, beds, description, cost_per_night} = homeObject;
  const homeRow = [img_url, home_type, beds, description, cost_per_night];
  var queryStr = 'INSERT INTO homes(img_url, home_type, beds, description, cost_per_night) VALUES (?, ?, ?, ?, ?)';
  dbConnection.query(queryStr, homeRow, callback);
};

module.exports = {
  getAllHomesFromDB,
  addHomeToDB
}

