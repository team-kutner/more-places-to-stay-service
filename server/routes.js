const express = require('express');
const app = express();
const controller = require('./controllers');
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


/* ==================== MYSQL CRUD API REQUESTS ====================== //

app.get('/api/homes/:id/nearbyHomes', controller.mysql.get);

app.post('/api/homes/:id/nearbyHomes', controller.mysql.post);

app.put('/api/homes/:id/nearbyHomes', controller.mysql.update);

app.delete('/api/homes/:id/nearbyHomes', controller.mysql.remove);

// ==================================================================== */


// ================== POSTGRES CRUD API REQUESTS ==================== //

app.get('/api/homes/:id/nearbyHomes', controller.postgres.get);

app.post('/api/homes/create/nearbyHomes', controller.postgres.post);

app.put('/api/homes/:id/nearbyHomes', controller.postgres.update);

app.delete('/api/homes/:id/nearbyHomes', controller.postgres.remove);

app.get('/loaderio-9ae0d6f00a09b5b84b9c2062ca2fb157', controller.postgres.token);

// ==================================================================== */


/* ================== CASSANDRA CRUD API REQUESTS ==================== //

app.get('/api/homes/:id/nearbyHomes', controller.cassandra.get);

app.post('/api/homes/:id/nearbyHomes', controller.cassandra.post);

app.put('/api/homes/:id/nearbyHomes', controller.cassandra.update);

app.delete('/api/homes/:id/nearbyHomes', controller.cassandra.remove);

// ==================================================================== */

module.exports = app;


