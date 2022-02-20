"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes = express_1.default.Router();
// will be used for the ui
routes.get('/', function (req, res) {
    res.send('Hello, world!');
});
exports.default = routes;
