const faker = require('faker');
const fs = require('fs');
const path = require('path');

const deleteFileIfExists = (dest) => {
  if (fs.existsSync(dest)) {
    try {
      fs.unlinkSync(dest);
      console.log('CSV file deleted');
    } catch (err) {
      console.error(err);
    }
  } else {
    return;
  }
};

const csvFile = path.join(__dirname, 'cassyCSVdata.csv');
deleteFileIfExists(csvFile);

const getRandomInt = (itemList) => {
  let max = itemList.length;
  return Math.floor(Math.random() * Math.floor(max));
};

const homeTypes = ['home', 'hotel', 'cabin', 'apartment', 'mansion', 'igloo', 'hut'];
const cities = ['menlo park', 'palo alto', 'la honda', 'san carlos', 'pescadero', 'half moon bay'];

const createFakeListing = ((id) => {
  return [
    id,
    faker.name.findName() + ' AirBnB',
    faker.image.imageUrl(),
    homeTypes[getRandomInt(homeTypes)],
    faker.random.number({
      'min': 1,
      'max': 12
    }),
    faker.random.words(10),
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

let index = 0;
let counter = 1000000;
const homesStream = fs.createWriteStream(__dirname + '/cassyCSVdata.csv', {flags: 'a'});

const createFakeListings = ((id) => {
  let fakeListings = [];
  const incrementer = 10000;
  for (var k = id; k < id + incrementer; k++) {
    const listing = createFakeListing(k + 1);
    fakeListings.push(listing);
  }
  index += incrementer;
  return fakeListings;
});

const createHomesHeader = () => {
  homesStream.write('homeID|name|img_url|home_type|beds|description|city|cost_per_night|reviews|avg_rating|isSuperhost\n');
};

const addHomesToCSV = () => {
  let fakeListings = createFakeListings(index);
  for (let j = 0; j < fakeListings.length; j++) {
    const fl = fakeListings[j];
    homesStream.write(`${fl[0]}|${fl[1]}|${fl[2]}|${fl[3]}|${fl[4]}|${fl[5]}|${fl[6]}|${fl[7]}|${fl[8]}|${fl[9]}|${fl[10]}\n`);
  }
};

const createCSV = () => {
  console.time();
  for (let i = 0; i < 1000; i++) {
    addHomesToCSV();
  }
  console.timeEnd();
  console.log('Cassandra CSV file created successfully');
};

createHomesHeader();
createCSV();
