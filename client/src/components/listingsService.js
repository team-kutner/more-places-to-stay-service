import axios from 'axios';

const listingsService = () => {
  return axios.get('/api/nearbyHomes/city')
    .then(res => res.data)
    .catch(err => {
      console.log('error is ', err);
    })
};

export default listingsService;