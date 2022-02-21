/* eslint-disable prettier/prettier */
import resize from '../resize';
import path from 'path';
import { promises as fs } from 'fs';


const filePath = path.resolve(__dirname, `../../images/fjord.jpg`);
const endPath = path.resolve(__dirname, `../../thumbnails/fjord-200-400.jpg`);


describe('sharp function', () => {
  it('should be a string euqal a path file', async () => {
    const image = await resize(filePath, '200', '400', endPath);
    expect(image).toEqual(endPath);
  });
  afterAll(function () {
    fs.unlink(path.resolve(__dirname, `../../thumbnails/fjord-200-400.jpg`));
  });
});
