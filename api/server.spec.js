const request = require('supertest');
const publishServer = require('./publish-server');
const subscribeServer = require('./subscribe-server');

describe('server', () => {
  describe('[GET] / endpoint', () => {
    test('should return 200 OK', async () => {
      const response = await request(publishServer).get('/');
      expect(response.status).toBe(200);
    });
    test('returns the right response body', () => {
      return request(publishServer).get('/')
        .then(res => {
          expect(res.body).toEqual({ publish_server: 'Running!' });
        });
    });
    test('should return 200 OK', async () => {
      const response = await request(subscribeServer).get('/');
      expect(response.status).toBe(200);
    });
    test('returns the right response body', () => {
      return request(subscribeServer).get('/')
        .then(res => {
          expect(res.body).toEqual({ subscribe_server: 'Running!' });
        });
    });
  });
});