const models = require('../models');

const get = (req, res) => {
  const ID = Number(req.params.id);
  models.mysql.getNearbyFromID(ID, (err, result) => {
    if (err) {
      console.error('get request failed: ', err);
      res.status(400);
    } else {
      res.status(200);
      console.log('get home by id successful');
    }
    models.mysql.getCityHomesFromDB(result[0].city, ID, (err, results) => {
      if (err) {
        console.error('get all homes failed: ', err);
        res.status(400);
      } else {
        console.log('get all homes successful');
        res.status(200).send(results);
        res.end();
      }
    });
  });
};

const post = (req, res) => {
  const newHome = req.body;
  models.mysql.postNearbyHome(newHome, (err, result) => {
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
  models.mysql.updateDescription(description, id, (err, result) => {
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
  models.mysql.deleteHome(id, (err, result) => {
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

module.exports = {
  get,
  post,
  update,
  remove
};

