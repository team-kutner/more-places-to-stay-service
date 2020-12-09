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

const csvFile = path.join(__dirname, 'pgData.csv');
deleteFileIfExists(csvFile);

const getRandomInt = (itemList) => {
  let max = itemList.length;
  return Math.floor(Math.random() * Math.floor(max));
};

const homeTypes = ['home', 'hotel', 'cabin', 'apartment', 'mansion', 'igloo', 'hut'];
const cities = ['menlo park', 'palo alto', 'la honda', 'san carlos', 'pescadero', 'half moon bay'];

const createFakeListing = (() => {
  return [
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

const createFakeListings = (() => {
  let fakeListings = [];
  for (let i = 0; i < 10000; i++) {
    fakeListings.push(createFakeListing());
  }
  return fakeListings;
});

const fakeListings = createFakeListings();

const createHomesHeader = () => {
  const homesStream = fs.createWriteStream(__dirname + '/pgData.csv');
  homesStream.write('name|img_url|home_type|beds|description|city|cost_per_night|reviews|avg_rating|isSuperhost\n');
};

const addHomesToCSV = () => {
  const homesStream = fs.createWriteStream(__dirname + '/pgData.csv', {flags: 'a'});
  for (let i = 0; i < fakeListings.length; i++) {
    const fl = fakeListings[i];
    homesStream.write(`${fl[0]}|${fl[1]}|${fl[2]}|${fl[3]}|${fl[4]}|${fl[5]}|${fl[6]}|${fl[7]}|${fl[8]}|${fl[9]}\n`);
  }
};

const createCSV = () => {
  console.time();
  for (let i = 0; i < 1000; i++) {
    addHomesToCSV();
  }
  console.timeEnd();
  console.log('Postgres CSV created successfully');
};

createHomesHeader();
createCSV();


////////////////////////////////////////////////////

// Use 'npm run postgres_csv' to create CSV file

////////////////////////////////////////////////////