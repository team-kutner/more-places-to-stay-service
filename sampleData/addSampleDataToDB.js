const sampleData = require('./sampleData');
const router = require('../database/router.js')

// console.log('ROUTER: \n', JSON.stringify(router));

const loopOverSampleData = (input) => {
  for (var i = 0; i < input.length; i++) {
    console.log('Number ', i);
    router.addHomeToDatabase(input[i]);
  }
}

loopOverSampleData(sampleData);