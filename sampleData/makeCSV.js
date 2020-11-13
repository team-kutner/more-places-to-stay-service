
// const homes = [
//   {
//     img_url: 'https://aquabnblistingimages.s3-us-west-1.amazonaws.com/home_images/lake-1835544_640.jpg',
//     home_type: 'hut',
//     beds: 12,
//     description: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
//     city: 'menlo park',
//     cost_per_night: 22
//   },
//   {
//     img_url: 'https://aquabnblistingimages.s3-us-west-1.amazonaws.com/home_images/holiday-house-177401_640.jpg',
//     home_type: 'igloo',
//     beds: 10,
//     description: 'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
//     city: 'half moon bay',
//     cost_per_night: 46
//   },
//   {
//     img_url: 'https://aquabnblistingimages.s3-us-west-1.amazonaws.com/home_images/fishermen-cabin-1191186_640.jpg',
//     home_type: 'hotel',
//     beds: 7,
//     description: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
//     city: 'la honda',
//     cost_per_night: 32
//   }];

// let csvContent = "data:text/csv;charset=utf-8,";

// homes.forEach(function(home) {
//   const {img_url, home_type, beds, description, city, cost_per_night} = home;
//   let row = img_url +',' + home_type +',' + beds +',' + description + city + ',' + cost_per_night
//   csvContent += row + "\r\n";
// });


const rows = [
  ["name1", "city1", "some other info"],
  ["name2", "city2", "more info"]
];

let csvContent = "data:text/csv;charset=utf-8,";

rows.forEach(function(rowArray) {
  let row = rowArray.join(",");
  csvContent += row + "\r\n";
});

var encodedUri = encodeURI(csvContent);
window.open(encodedUri);