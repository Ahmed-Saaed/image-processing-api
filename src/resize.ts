import sharp from 'sharp';

//using sharp library to resize an image and move it to its directory and return the path

const resize = async (
  fileName: string,
  w: string,
  h: string,
  output: string
): Promise<string> => {
  const width: number = parseInt(w);
  const height: number = parseInt(h);

  try {
    await sharp(fileName)
      .resize(width, height, {
        background: { r: 0, g: 0, b: 0, alpha: 1 },
      })
      .toFile(output);

    console.log('image resizing');
    return output;
  } catch (err) {
    console.error(err);
    return 'something went wrong, try again.';
  }
};

export default resize;
