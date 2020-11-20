import axios from 'axios';

const listingsService = () => {
  return axios.get('/api/nearbyHomes/55')
    .then(res => res.data)
    .catch(err => {
      console.log('error is ', err);
    })
};

export default listingsService;