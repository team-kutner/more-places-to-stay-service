const dbConnection = require('./dbConnection.js');

const getCityHomesFromDB = (city, id, callback) => {
  const queryStr = `SELECT * FROM homes WHERE city = '${city}' LIMIT 12 ALLOW FILTERING`;
  dbConnection.execute(queryStr, callback);
};

const getNearbyFromID = (id, callback) => {
  const queryStr = `SELECT city from homes WHERE homeid = ${id}`;
  dbConnection.execute(queryStr, callback);
};

const postNearbyHome = (home, callback) => {
  const queryStr = 'INSERT INTO homes (homeid, name, img_url, home_type, beds, description, city, cost_per_night, reviews, avg_rating, isSuperhost) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const homeInfo = [home.homeid, home.name, home.img_url, home.home_type, home.beds, home.description, home.city, home.cost_per_night, home.reviews, home.avg_rating, home.isSuperhost];
  dbConnection.execute(queryStr, homeInfo, { prepare: true }, callback);
};

const updateDescription = (desc, id, callback) => {
  const queryStr = `UPDATE homes SET description = '${desc}' WHERE homeid = ${id}`;
  dbConnection.execute(queryStr, callback);
};

const deleteHome = (id, callback) => {
  const queryStr = `DELETE FROM homes WHERE homeid = ${id}`;
  dbConnection.execute(queryStr, callback);
};

module.exports = {
  getCityHomesFromDB,
  getNearbyFromID,
  postNearbyHome,
  updateDescription,
  deleteHome
};