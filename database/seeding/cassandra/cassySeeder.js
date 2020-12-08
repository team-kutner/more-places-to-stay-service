const pool = require('./config.js').pool;

pool.query(
  `COPY homes (homeid, name, img_url, home_type, beds, description, city, cost_per_night, reviews, avg_rating, isSuperhost)
  FROM '/Users/mitchmcdermott/Desktop/SDC/more-places-to-stay-service/database/CSV/cassyCSVdata.csv'
  WITH DELIMITER ='|' AND
  HEADER = TRUE
`, (error, result) => {
    if (error) {
      console.error(error);
    } else {
      console.log('cassandra db seeded successfully');
    }
    pool.end();
  }
);



//////////////////////////////////////////////////////

// Use 'npm run cassy_seed' to seed databse

///////////////////////////////////////////////////////