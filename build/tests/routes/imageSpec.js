"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var image_1 = require("../../routes/image");
var path_1 = __importDefault(require("path"));
var filePath = path_1.default.resolve(__dirname, "../../images/icelandwaterfall.jpg");
var fail = path_1.default.resolve(__dirname, "../../images/landwater.jpg");
describe('image process test', function () {
    it('should return a path', function () {
        var result = (0, image_1.fileExist)(filePath);
        expect(result).toBe(filePath);
    });
    it('should return an empty string', function () {
        var result = (0, image_1.fileExist)(fail);
        expect(result).toBe('');
    });
});
