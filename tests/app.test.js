const request = require('supertest');

const baseURL = "http://localhost:4000/api";

describe('Express App', () => {
  it('responds with 404 Not Found for invalid routes', async () => {
    const response = await request(baseURL).get('/invalid-route');
    expect(response.status).toBe(404);
    expect(response.body).toEqual({ message: 'Not Found : /api/invalid-route' });
  });
});

