const request = require('supertest');
const app = require('./server'); // Import your Express app

describe('GET /', () => {
  let server;

  beforeAll((done) => {
    server = app.listen(3000, () => {
      console.log('Server is listening at http://localhost:3000');
      done();
    });
  }, 10000);

  afterAll((done) => {
    server.close(done); // Close the server connection
  });

  it('responds with status 200 and a welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toEqual('Bienvenue sur notre serveur Express HAHAHA!');
  });
});
