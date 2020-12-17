const redis = require('redis');
const { promisifyAll } = require('bluebird');
const config = require('./config.js');

promisifyAll(redis);

const client = redis.createClient(config);

module.exports = client;