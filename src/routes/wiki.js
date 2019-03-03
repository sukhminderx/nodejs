"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var wikiRouter = express_1.default.Router();
// Home page route.
wikiRouter.get('/', function (req, res) {
    res.send('Home Page');
});
// About page route.
wikiRouter.get('/about', function (req, res) {
    res.send('About Page');
});
exports.default = wikiRouter;
