import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('test endpoint responses', () => {
  it('should return a status of 200', () => {
    request.get('/api').then((response) => {
      expect(response.status).toBe(200);
    });
  });
});
