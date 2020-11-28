import axios from 'axios';

const listingsService = (id) => {
  let endpoint = '/api/homes/' + id + '/nearbyHomes';
  return axios.get(endpoint)
    .then(res => res.data)
    .catch(err => {
      console.log('error is ', err);
    });
};

export default listingsService;