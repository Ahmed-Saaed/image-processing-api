"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest"));
var index_1 = __importDefault(require("../index"));
var request = (0, supertest_1.default)(index_1.default);
describe('test endpoint responses', function () {
    it('should return a status of 200', function () {
        request.get('/api').then(function (response) {
            expect(response.status).toBe(200);
        });
    });
});
