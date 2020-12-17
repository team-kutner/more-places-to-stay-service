const models = require('../models');
const redis = require('../../database/redis/dbConnection.js');

const get = (req, res) => {
  const ID = Number(req.params.id);
  // check if its in redis
  redis.getAsync(`homeID${ID}`)
    .then(homes => {
      // if it's not, query database
      if (homes === null) {
        models.postgres.getNearbyFromID(ID, (err, result) => {
          if (err) {
            console.error('get request failed: ', err);
            res.status(400);
          } else {
            console.log('get home by id successful');
          }
          models.postgres.getCityHomesFromDB(result.rows[0].city, ID, (err, results) => {
            if (err) {
              console.error('get all homes failed: ', err);
              res.status(400);
            } else {
              console.log('get all homes successful');
              // set homeId in redis with stringified resutls
              redis.setAsync(`homeID${ID}`, JSON.stringify(results.rows));
              res.status(200).send(results.rows);
              res.end();
            }
          });
        });
      } else {
        console.log(homes);
        res.send(homes);
      }
    })
    .catch(err => {
      console.error('redis get error: ', err);
      res.status(400);
    });
};

const post = (req, res) => {
  const newHome = req.body;
  models.postgres.postNearbyHome(newHome, (err, result) => {
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
};

const update = (req, res) => {
  const id = req.url.split('/')[3];
  const description = req.body.description;
  models.postgres.updateDescription(description, id, (err, result) => {
    if (err) {
      res.status(400);
      console.error('update request failed: ', err);
    } else {
      console.log('update successful');
      res.status(200);
      res.end();
    }
  });
};

const remove = (req, res) => {
  const id = req.url.split('/')[3];
  models.postgres.deleteHome(id, (err, result) => {
    if (err) {
      res.status(400);
      console.error('delete request failed: ', err);
    } else {
      console.log('delete successful');
      res.status(200);
      res.end();
    }
  });
};

const token = (req, res) => {
  res.status(200).send('loaderio-9ae0d6f00a09b5b84b9c2062ca2fb157');
};

module.exports = {
  get,
  post,
  update,
  remove,
  token
};

