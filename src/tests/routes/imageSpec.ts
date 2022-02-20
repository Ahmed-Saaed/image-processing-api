import { fileExist } from '../../routes/image';
import path from 'path';

const filePath = path.resolve(__dirname, `../../images/icelandwaterfall.jpg`);
const fail = path.resolve(__dirname, `../../images/landwater.jpg`);

describe('image process test', () => {
  it('should return a path', () => {
    const result = fileExist(filePath);
    expect(result).toBe(filePath);
  });

  it('should return an empty string', () => {
    const result = fileExist(fail);
    expect(result).toBe('');
  });
});
