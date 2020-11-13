const faker = require('faker');
const s3HostedImgs = require('./imageSeeds.js');
const dbConnection = require('../dbConnection.js');


const getRandomInt = (itemList) => {
  let max = itemList.length;
  return Math.floor(Math.random() * Math.floor(max));
}

const home_types = ['home', 'hotel', 'cabin', 'apartment', 'mansion', 'igloo', 'hut'];
const img_urls = s3HostedImgs;
const cities = ['menlo park', 'palo alto', 'la honda', 'san carlos', 'pescadero', 'half moon bay'];


const createFakeListing = (() => {
  return [
    img_urls[getRandomInt(img_urls)],
    home_types[getRandomInt(home_types)],
    faker.random.number({
      'min': 1,
      'max': 12
    }),
    faker.commerce.productDescription(),
    cities[getRandomInt(cities)],
    faker.random.number({
      'min': 10,
      'max': 50
    })
  ]
});

const createFakeListings = (() => {
  let fakeListings = [];
  for (var i = 0; i < 100; i++) {
    fakeListings.push(createFakeListing());
  };
  return fakeListings;
});

let fakeListings = createFakeListings();
let sql = "INSERT INTO homes (img_url, home_type, beds, description, city, cost_per_night) VALUES ?";
dbConnection.query(sql, [fakeListings], (err) => {
  if (err) throw err;
  dbConnection.end();
});

module.exports = createFakeListings;