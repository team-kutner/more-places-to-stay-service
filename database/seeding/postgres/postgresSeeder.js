const pool = require('./connection.js').pool;

pool.query(`
  COPY homes (name, img_url, home_type, beds, description, city, cost_per_night, reviews, avg_rating, isSuperhost)
  FROM '/Users/mitchmcdermott/Desktop/SDC/more-places-to-stay-service/database/CSV/CSVdata.csv'
  DELIMITER '|'
  CSV header;
  `, (error, result) => {
  if (error) {
    console.error(error);
  } else {
    console.log('postgres db seeded successfully');
  }
  pool.end();
});