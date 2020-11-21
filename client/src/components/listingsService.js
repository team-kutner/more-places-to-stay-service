import axios from 'axios';

// const listingsService = () => {
const listingsService = (id) => {
  console.log('get get: ', id);
  let endpoint = '/api/nearbyHomes/' + id;
  console.log('endpoint: ', endpoint);
  return axios.get(endpoint)
  // return axios.get('/api/nearbyHomes/55')
    .then(res => res.data)
    .catch(err => {
      console.log('error is ', err);
    })
};

export default listingsService;