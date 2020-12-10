const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// ============== MYSQL CRUD API REQUESTS ================ //

// const router = require('../database/seeding/mysql/router.js');


// app.get('/api/homes/:id/nearbyHomes', (req, res) => {
//   const ID = Number(req.params.id);
//   router.getNearbyFromID(ID, (err, result) => {
//     if (err) {
//       console.error('get request failed: ', err);
//       res.status(400);
//     } else {
//       res.status(200);
//       console.log('get home by id successful');
//     }
//     router.getCityHomesFromDB(result[0].city, ID, (err, results) => {
//       if (err) {
//         console.error('get all homes failed: ', err);
//         res.status(400);
//       } else {
//         console.log('get all homes successful');
//         res.status(200).send(results);
//         res.end();
//       }
//     });
//   });
// });

// app.post('/api/homes/:id/nearbyHomes', (req, res) => {
//   const newHome = req.body;
//   router.postNearbyHome(newHome, (err, result) => {
//     if (err) {
//       res.status(400);
//       console.error('post request failed: ', err);
//       throw err;
//     } else {
//       console.log('post successful');
//       res.status(200);
//       res.end();
//     }
//   });
// });

// app.put('/api/homes/:id/nearbyHomes', (req, res) => {
//   const id = req.url.split('/')[3];
//   const description = req.body.description;
//   router.updateDescription(description, id, (err, result) => {
//     if (err) {
//       res.status(400);
//       console.error('update request failed: ', err);
//     } else {
//       console.log('update successful');
//       res.status(200);
//       res.end();
//     }
//   });
// });

// app.delete('/api/homes/:id/nearbyHomes', (req, res) => {
//   const id = req.url.split('/')[3];
//   router.deleteHome(id, (err, result) => {
//     if (err) {
//       res.status(400);
//       console.error('delete request failed: ', err);
//     } else {
//       console.log('delete successful');
//       res.status(200);
//       res.end();
//     }
//   });
// });



// ============== POSTGRES CRUD API REQUESTS ================ //

// const router = require('../database/seeding/postgres/router.js');


// app.get('/api/homes/:id/nearbyHomes', (req, res) => {
//   const ID = Number(req.params.id);
//   router.getNearbyFromID(ID, (err, result) => {
//     if (err) {
//       console.error('get request failed: ', err);
//       res.status(400);
//     } else {
//       res.status(200);
//       console.log('get home by id successful');
//     }
//     router.getCityHomesFromDB(result.rows[0].city, ID, (err, results) => {
//       if (err) {
//         console.error('get all homes failed: ', err);
//         res.status(400);
//       } else {
//         console.log('get all homes successful');
//         res.status(200).send(results.rows);
//         res.end();
//       }
//     });
//   });
// });

// app.post('/api/homes/:id/nearbyHomes', (req, res) => {
//   const newHome = req.body;
//   router.postNearbyHome(newHome, (err, result) => {
//     if (err) {
//       res.status(400);
//       console.error('post request failed: ', err);
//       throw err;
//     } else {
//       console.log('post successful');
//       res.status(200);
//       res.end();
//     }
//   });
// });

// app.put('/api/homes/:id/nearbyHomes', (req, res) => {
//   const id = req.url.split('/')[3];
//   const description = req.body.description;
//   router.updateDescription(description, id, (err, result) => {
//     if (err) {
//       res.status(400);
//       console.error('update request failed: ', err);
//     } else {
//       console.log('update successful');
//       res.status(200);
//       res.end();
//     }
//   });
// });

// app.delete('/api/homes/:id/nearbyHomes', (req, res) => {
//   const id = req.url.split('/')[3];
//   router.deleteHome(id, (err, result) => {
//     if (err) {
//       res.status(400);
//       console.error('delete request failed: ', err);
//     } else {
//       console.log('delete successful');
//       res.status(200);
//       res.end();
//     }
//   });
// });



// ============== CASSANDRA CRUD API REQUESTS ================ //

const router = require('../database/seeding/cassandra/router.js');


app.get('/api/homes/:id/nearbyHomes', (req, res) => {
  const ID = Number(req.params.id);
  router.getNearbyFromID(ID, (err, result) => {
    if (err) {
      console.error('get request failed: ', err);
      res.status(400);
    } else {
      res.status(200);
      console.log('get home by id successful');
    }
    router.getCityHomesFromDB(result.rows[0].city, ID, (err, results) => {
      if (err) {
        console.error('get all homes failed: ', err);
        res.status(400);
      } else {
        console.log('get all homes successful');
        res.status(200).send(results.rows);
        res.end();
      }
    });
  });
});

app.post('/api/homes/:id/nearbyHomes', (req, res) => {
  const newHome = req.body;
  router.postNearbyHome(newHome, (err, result) => {
    if (err) {
      res.status(400);
      console.error('post request failed: ', err);
      throw err;
    } else {
      console.log('post successful');
      res.status(200);
      res.end();
    }
  });
});

app.put('/api/homes/:id/nearbyHomes', (req, res) => {
  const id = req.url.split('/')[3];
  const description = req.body.description;
  router.updateDescription(description, id, (err, result) => {
    if (err) {
      res.status(400);
      console.error('update request failed: ', err);
    } else {
      console.log('update successful');
      res.status(200);
      res.end();
    }
  });
});

app.delete('/api/homes/:id/nearbyHomes', (req, res) => {
  const id = req.url.split('/')[3];
  router.deleteHome(id, (err, result) => {
    if (err) {
      res.status(400);
      console.error('delete request failed: ', err);
    } else {
      console.log('delete successful');
      res.status(200);
      res.end();
    }
  });
});


// ========================================================== //

module.exports = app;


