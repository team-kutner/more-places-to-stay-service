const pool = require('./connection.js').pool;

pool.query(`
  COPY homes
  FROM '/Users/mitchmcdermott/Desktop/SDC/more-places-to-stay-service/database/CSV/CSVdata.csv'
  DELIMITER ','
  `, (error, result) => {
  if (error) {
    console.error(error);
  } else {
    console.log('postgres db seeded successfully');
  }
  pool.end;
});