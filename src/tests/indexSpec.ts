import supertest from 'supertest';
import app from '../index';
import path from 'path';
import { promises as fs } from 'fs';

const request = supertest(app);
// const imageRequest = supertest(images);

describe('test endpoint responses', () => {
  it('the images endpoint should return a status of 200', () => {
    request
      .get('/api/images?filename=encenadaport&width=200&height=400')
      .then((response) => {
        expect(response.status).toBe(200);
      });
  });

  afterAll(function () {
    fs.unlink(
      path.resolve(__dirname, `../../thumbnails/encenadaport-200-400.jpg`)
    );
  });
});
