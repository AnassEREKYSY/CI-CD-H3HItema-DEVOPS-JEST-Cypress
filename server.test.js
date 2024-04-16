const request = require('supertest');
const app = require('./server');

describe('GET /', () => {
  it('responds with status 200 and a welcome message', async () => {
    const response = await request(app).get('http://localhost:3000');
    expect(response.status).toBe(200);
    expect(response.text).toEqual('Bienvenue sur notre serveur Express !');
  });
});
