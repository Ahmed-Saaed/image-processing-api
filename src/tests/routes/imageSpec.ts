import { fileExist } from '../../routes/image';
import path from 'path';

// const filePath = path.resolve(__dirname, `../../thumbnails/fjord-750-800.jpg`);
const fail = path.resolve(__dirname, `../../images/landwater.jpg`);

describe('image process test', () => {
  // it('should return a path', () => {
  //   expect(fileExist(filePath)).toEqual(filePath);
  // });

  it('should return an empty string', () => {
    const fresult = fileExist(fail);
    expect(fresult).toBe('');
  });
});
