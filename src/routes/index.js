"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var wiki_1 = __importDefault(require("./wiki"));
var setRoutes = function (app) {
    app.use('/wiki', wiki_1.default);
    app.get('*', function (req, res) {
        res.status(400).send({
            message: 'error'
        });
    });
};
exports.default = setRoutes;
