const pool = require('./config.js').pool;

pool.query(`
  COPY homes (name, img_url, home_type, beds, description, city, cost_per_night, reviews, avg_rating, isSuperhost)
  FROM '/Users/mitchmcdermott/Desktop/SDC/more-places-to-stay-service/database/CSV/pgData.csv'
  DELIMITER '|'
  CSV header;
  `, (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log('postgres db seeded successfully');
  }
  pool.end();
});




//////////////////////////////////////////////////////

// Use 'npm run postgres_seed' to seed databse

///////////////////////////////////////////////////////