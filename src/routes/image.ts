import express from 'express';
import path from 'path';
import resize from '../resize';
import { promises as fs } from 'fs';
import { existsSync } from 'fs';

const images = express.Router();

const filePath = path.resolve(__dirname, `../../images`);
const outputPath = path.resolve(__dirname, `../../thumbnails`);

// check if the file is exist in the thumbfile

export function fileExist(file: string): string {
  try {
    if (existsSync(file)) {
      return file as string;
    } else {
      return '';
    }
  } catch (error) {
    console.log(error);
    return '';
  }
}

images.get('/images', async (req, res) => {
  const width = `${req.query.width}`;
  const height = `${req.query.height}`;
  const fileName = `${filePath}/${req.query.filename}.jpg`;
  const output = `${outputPath}/${req.query.filename}-${req.query.width}-${req.query.height}.jpg`;

  // if the file exist we will just send it if not we will use the resize function

  const existImage: string = fileExist(output);

  if (existImage.length < 1) {
    try {
      resize(fileName, width, height, output)
        // note to future me : you can use fs.readfile to create buffer(when you need) then use res.end(response , 'binary')
        .then((response) => {
          res.sendFile(response);
        })
        .catch(() => res.send('<p>sth went wrong try again </p>'));
    } catch {
      res.send('<p>something went wrong during the process</p>');
    }
  } else {
    fs.readFile(existImage).then((response) => {
      res.end(response, 'binary');
    });
  }
});

export default images;
