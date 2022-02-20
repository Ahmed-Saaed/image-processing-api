import express  from "express";
import sharp from "sharp";
import path from "path";
import resize from "../resize";
// import { promises as fsPromises } from "fs";

let width:number =600
let height:number =400

const images = express.Router();

const fileName= path.resolve(__dirname, '../../images/fjord.jpg');
const output = path.resolve(__dirname, '../../thumbnails/fjord.jpg');

images.get(`/`,  (req, res) => {
  
    res.sendFile(output)
    resize(fileName, width, height, output);
  ;
  
});


  export default images ;