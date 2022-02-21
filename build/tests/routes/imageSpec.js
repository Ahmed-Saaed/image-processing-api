"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var image_1 = require("../../routes/image");
var path_1 = __importDefault(require("path"));
// const filePath = path.resolve(__dirname, `../../thumbnails/fjord-750-800.jpg`);
var fail = path_1.default.resolve(__dirname, "../../images/landwater.jpg");
describe('image process test', function () {
    // it('should return a path', () => {
    //   expect(fileExist(filePath)).toEqual(filePath);
    // });
    it('should return an empty string', function () {
        var fresult = (0, image_1.fileExist)(fail);
        expect(fresult).toBe('');
    });
});
