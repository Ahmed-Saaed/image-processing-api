import express  from "express";
import sharp from "sharp";
import path from "path";
// import { promises as fsPromises } from "fs";



const routes = express.Router();
const fileName= path.resolve(__dirname, '../../images/fjord.jpg');

const output = path.resolve(__dirname, '../../thumbnails/fjord.jpg');

routes.get('/', (req, res) => {
  
  
  sharp(fileName)
  .resize(200, 400, {
    background: {r:0,g:0,b:0,alpha:1}
  })
  .toFile(output)

  res.sendFile(output);
});


  export default routes ;