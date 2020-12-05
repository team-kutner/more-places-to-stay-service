const faker = require('faker');
const s3HostedImgs = require('../seeding/imageSeeds.js');
const fs = require('fs');


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
    imgUrls[getRandomInt(imgUrls)],
    homeTypes[getRandomInt(homeTypes)],
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
  for (var i = 0; i < 1000; i++) {
    fakeListings.push(createFakeListing());
  }
  return fakeListings;
});

let fakeListings = createFakeListings();

const createHomesHeader = () => {
  const homesStream = fs.createWriteStream(__dirname + '/cassyHomes.csv');
  homesStream.write('name,img_url,home_type,beds,description,city,cost_per_night,reviews,avg_rating,isSuperhost\n');
};

const addHomesToCSV = () => {
  const homesStream = fs.createWriteStream(__dirname + '/cassyHomes.csv', {flags: 'a'});
  for (let i = 0; i < fakeListings.length; i++) {
    const fl = fakeListings[i];
    homesStream.write(`${fl[0]},${fl[1]}${fl[2]},${fl[3]},${fl[4]},${fl[5]},${fl[6]},${fl[7]},${fl[8]},${fl[9]}\n`);
  }
};

createHomesHeader();

const createCassyCSV = () => {
  for (let i = 0; i < 10; i++) {
    addHomesToCSV();
  }
  console.log('Cassy CSV created successfully');
};

createCassyCSV();