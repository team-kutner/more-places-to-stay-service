const faker = require('faker');
const s3HostedImgs = require('./imageSeeds.js');
const dbConnection = require('../dbConnection.js');


const getRandomInt = (itemList) => {
  let max = itemList.length;
  return Math.floor(Math.random() * Math.floor(max));
};

const homeTypes = ['home', 'hotel', 'cabin', 'apartment', 'mansion', 'igloo', 'hut'];
const imgUrls = s3HostedImgs;
const cities = ['menlo park', 'palo alto', 'la honda', 'san carlos', 'pescadero', 'half moon bay'];

const createFakeListing = (() => {
  return [
    faker.name.findName() + ' AirBnB',
    imgUrls[getRandomInt(img_urls)],
    homeTypes[getRandomInt(home_types)],
    faker.random.number({
      'min': 1,
      'max': 12
    }),
    faker.commerce.productDescription(),
    cities[getRandomInt(cities)],
    faker.random.number({
      'min': 10,
      'max': 50
    }),
    faker.random.number({
      'min': 0,
      'max': 1000
    }),
    faker.random.float({
      'min': 1,
      'max': 5
    }),
    faker.random.boolean()
  ];
});

const createFakeListings = (() => {
  let fakeListings = [];
  for (var i = 0; i < 100; i++) {
    fakeListings.push(createFakeListing());
  }
  return fakeListings;
});

let fakeListings = createFakeListings();
let sql = 'INSERT INTO homes (name, img_url, home_type, beds, description, city, cost_per_night, reviews, avg_rating, isSuperhost) VALUES ?';
dbConnection.query(sql, [fakeListings], (err) => {
  if (err) { throw err; }
  dbConnection.end();
});

module.exports = createFakeListings;