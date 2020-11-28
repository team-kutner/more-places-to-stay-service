const app = require('./app.js');
const request = require('supertest');

describe('endpoint tests', () => {
  it('passes test for endpoint /api/nearbyHomes', () => {
    return request(app)
      .get('/api/nearbyHomes')
      .then(response => {
        expect(response.status).toBe(200);
        expect(response).toBeDefined();
        expect(response.body.length).toBe(100);
      });
  });

  it('passes test for endpoint /api/nearbyHomes/city', () => {
    return request(app)
      .get('/api/nearbyHomes')
      .then(response => {
        expect(response.status).toBe(200);
        expect(response).toBeDefined();
      });
  });
});
