const request = require('supertest');
const publishServer = require('../api/publish-server');

const input = {
  topic: "greetings",
  city: {msg: "hi y'all"}
}

describe('publish router', () => {
  describe('POST /topic', () => {
    test('should return 404 with no subscriber added', () => {
      return request(publishServer)
        .post('/:topic')
        .send(input)
        .set('Accept', 'application/json')
        .expect('Content-Type', /text/)
        .expect(404)
        .then(res => {
          (res.body)
        })
    });
  });
})