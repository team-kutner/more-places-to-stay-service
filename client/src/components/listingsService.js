import axios from 'axios';

// const listingsService = () => {
const listingsService = (id) => {
  let endpoint = '/api/homes/' + id + '/nearbyHomes';
  return axios.get(endpoint)
  // return axios.get('/api/nearbyHomes/55')
    .then(res => res.data)
    .catch(err => {
      console.log('error is ', err);
    })
};

export default listingsService;