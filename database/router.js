const dbConnection = require('./dbConnection');
// const fakerSampleDataEntry = require('../sampleData/fakerSampleDataEntry.js');

// var fakerData = fakerSampleDataEntry();
// console.log(fakerData);

// var getAllHomesFromDB = (callback) => {
//   var queryStr = 'SELECT * FROM homes';
//   dbConnection.query(queryStr, callback);
// };

// var addHomeToDB = (homeObject, callback) => {
//   const {img_url, home_type, beds, description, city, cost_per_night} = homeObject;
//   const homeRow = [img_url, home_type, beds, description, city, cost_per_night];
//   var queryStr = 'INSERT INTO homes(img_url, home_type, beds, description, cost_per_night) VALUES (?, ?, ?, ?, ?, ?)';
//   dbConnection.query(queryStr, homeRow, callback);
// };

// for (var i = 0; i < fakerData.length; i++) {
//   addHomeToDB(fakerData[i], ((err, result) => {
//     if (err) throw err;
//     console.log(result);
//   }));
// }


var sql = "INSERT INTO homes (img_url, home_type, beds, description, city, cost_per_night) VALUES ?";
var values = [
  ['dfdsfdsf', 'hotel', 5, 'something here', 'new york', 88],
  ['anything', 'hotel', 6, 'something here', 'new york', 89]
];

dbConnection.query(sql, [values], (err) => {
  console.log('err', err);
  dbConnection.end();
});




// dbConnection.query(`INSERT INTO homes (img_url, home_type, beds, description, city, cost_per_night) VALUES ('dfdsfdsf', 'hotel', 5, 'something here', 'new york', 88);`);

// dbConnection.query(`INSERT INTO homes (img_url, home_type, beds, description, city, cost_per_night) VALUES ('www', 'hotel', 5, 'something here', 'new york', 65)`;

// dbConnection.query(`INSERT INTO homes
//                           (img_url, home_type, beds, description, city, cost_per_night)
//                         VALUES
//                           ('www', 'hotel', 5, 'something here', 'new york', 65),
//                           ('dsfd', 'home', 5, 'something here', 'new york', 65),
//                           ('dfsdsfd', 'hotel', 8, 'somethingelse  here', 'new orleans', 65)`);

// module.exports = {
//   getAllHomesFromDB,
//   addHomeToDB
// }

