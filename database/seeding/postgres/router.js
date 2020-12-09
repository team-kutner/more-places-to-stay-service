const pool = require('./config.js').pool;

const getCityHomesFromDB = (city, id, callback) => {
  const queryStr = `SELECT * FROM homes WHERE (city = '${city}' AND homeid != ${id}) LIMIT 12`;
  pool.query(queryStr, callback);
};

const getNearbyFromID = (id, callback) => {
  const queryStr = `SELECT * FROM homes WHERE homeid = ${id}`;
  pool.query(queryStr, callback);
};

const postNearbyHome = (home, callback) => {
  const queryStr = 'INSERT INTO homes (name, img_url, home_type, beds, description, city, cost_per_night, reviews, avg_rating, isSuperhost) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)';
  const homeInfo = [home.name, home.img_url, home.home_type, home.beds, home.description, home.city, home.cost_per_night, home.reviews, home.avg_rating, home.isSuperhost];
  pool.query(queryStr, homeInfo, callback);
};

const updateDescription = (desc, id, callback) => {
  const queryStr = `UPDATE homes SET description = '${desc}' WHERE homeid = ${id}`;
  pool.query(queryStr, callback);
};

const deleteHome = (id, callback) => {
  const queryStr = `DELETE FROM homes WHERE homeid = ${id}`;
  pool.query(queryStr, callback);
};

module.exports = {
  getCityHomesFromDB,
  getNearbyFromID,
  postNearbyHome,
  updateDescription,
  deleteHome
};

