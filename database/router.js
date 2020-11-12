const dbConnection = require('./dbConnection');

var getAllFromDatbase = () => {
  var queryStr = 'SELECT * FROM nearbyHomes';
  dbConnection.query(queryStr, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
};

var addHomeToDatabase = (homeObject) => {
  const {img_url, home_type, beds, description, cost_per_night} = homeObject;
  const homeRow = [img_url, home_type, beds, description, cost_per_night];
  var queryStr = 'INSERT INTO homes(img_url, home_type, beds, description, cost_per_night) VALUES (?, ?, ?, ?, ?)';
  dbConnection.query(queryStr, homeRow, (err, result) => {
    if (err) throw err;
    console.log(result);
    //res.send('Success To Add Home To Database');
  });
};

// addHomeToDatabase(  {
//   img_url: 'www.samplephoto1.com',
//   home_type: 'hotel',
//   beds: 3,
//   description: 'very nice place',
//   cost_per_night: 25
// });

module.exports = {
  getAllFromDatbase,
  addHomeToDatabase
}

