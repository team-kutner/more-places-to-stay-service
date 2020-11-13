const dbConnection = require('./dbConnection');

var getAllCitiesFromDB = (callback) => {
  var queryStr = 'SELECT * FROM cityLife';
  dbConnection.query(queryStr, callback);
};

var addCityToDB = (homeObject, callback) => {
  const {img_url, home_type, beds, description, cost_per_night} = homeObject;
  const homeRow = [img_url, home_type, beds, description, cost_per_night];
  var queryStr = 'INSERT INTO cityLife(img_url, home_type, beds, description, cost_per_night) VALUES (?, ?, ?, ?, ?)';
  dbConnection.query(queryStr, homeRow, callback);
};

module.exports = {
  getAllCitiesFromDB,
  addCityToDB
}

