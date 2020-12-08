const dbConnection = require('./dbConnection');

const getCityHomesFromDB = (city, ID, callback) => {
  const queryStr = `SELECT * FROM homes WHERE (city = '${city}' AND ID != ${ID}) LIMIT 12`;
  dbConnection.query(queryStr, callback);
};

const getNearbyFromID = (ID, callback) => {
  const queryStr = `SELECT city FROM homes WHERE id = ${ID}`;
  dbConnection.query(queryStr, callback);
};

const postNearbyHome = (home, callback) => {
  const queryStr = 'INSERT INTO homes (name, img_url, home_type, beds, description, city, cost_per_night, reviews, avg_rating, isSuperhost) value (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const homeInfo = [home.name, home.img_url, home.home_type, home.beds, home.description, home.city, home.cost_per_night, home.reviews, home.avg_rating, home.isSuperhost];
  console.log(homeInfo);
  dbConnection.query(queryStr, homeInfo, callback);
};

const updateDescription = (desc, id, callback) => {
  const queryStr = `UPDATE homes SET description = '${desc}' WHERE id = ${id}`;
  dbConnection.query(queryStr, callback);
};

const deleteHome = (id, callback) => {
  const queryStr = `DELETE FROM homes WHERE id = ${id}`;
  dbConnection.query(queryStr, callback);
};

module.exports = {
  getCityHomesFromDB,
  getNearbyFromID,
  postNearbyHome,
  updateDescription,
  deleteHome
};

