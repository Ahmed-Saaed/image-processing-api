import supertest from 'supertest';
import app from '../index';
import images from '../routes/image';

const request = supertest(app);
const imageRequest = supertest(images);

describe('test endpoint responses', () => {
  it('should return a status of 200', () => {
    request.get('/api').then((response) => {
      expect(response.status).toBe(200);
    });
  });
  it('the images endpoint should return a status of 200', () => {
    imageRequest
      .get('/api/images?filename=encenadaport&width=400&height=200')
      .then((response) => {
        expect(response.status).toBe(200);
      });
  });
});
