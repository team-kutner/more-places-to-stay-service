// https://www.npmjs.com/package/faker
const faker = require('faker');
const s3HostedImgs = require('./s3HostedImgs.js');


const getRandomInt = (itemList) => {
  let max = itemList.length;
  return Math.floor(Math.random() * Math.floor(max));
}

const home_types = ['home', 'hotel', 'cabin', 'apartment', 'mansion', 'igloo', 'hut'];
const img_urls = s3HostedImgs;
const cities = ['menlo park', 'palo alto', 'la honda', 'san carlos', 'pescadero', 'half moon bay'];

const createFakeListing = (() => {
  return {
    img_url: img_urls[getRandomInt(img_urls)],
    home_type: home_types[getRandomInt(home_types)],
    beds: faker.random.number({
      'min': 1,
      'max': 12
    }),
    description: faker.commerce.productDescription(),
    city: cities[getRandomInt(cities)],
    cost_per_night: faker.random.number({
      'min': 10,
      'max': 50
    })
  }
});

const createFakeListings = (() => {
  var fakeListings = [];
  for (var i = 0; i < 100; i++) {
    fakeListings.push(createFakeListing());
  };
  return fakeListings;
});

var fakeListings = createFakeListings();
console.log(fakeListings);

module.export = createFakeListing;


