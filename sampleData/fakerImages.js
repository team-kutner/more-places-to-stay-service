// https://www.npmjs.com/package/faker
const faker = require('faker');

const generateFakeImages = ((amount) => {
  var imageBucket = [];
  for (var i = 0; i < amount; i++) {
    imageBucket.push(faker.image.imageUrl());
  }
  return imageBucket;
})

var fakeImages = generateFakeImages(4);
console.log(fakeImages);