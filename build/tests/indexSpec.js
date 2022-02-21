"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest"));
var index_1 = __importDefault(require("../index"));
var path_1 = __importDefault(require("path"));
var fs_1 = require("fs");
var request = (0, supertest_1.default)(index_1.default);
// const imageRequest = supertest(images);
describe('test endpoint responses', function () {
    it('the images endpoint should return a status of 200', function () {
        request
            .get('/api/images?filename=encenadaport&width=200&height=400')
            .then(function (response) {
            expect(response.status).toBe(200);
        });
    });
    afterAll(function () {
        fs_1.promises.unlink(path_1.default.resolve(__dirname, "../../thumbnails/encenadaport-200-400.jpg"));
    });
});
