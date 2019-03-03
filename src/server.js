"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var app = express_1.default();
var port = Number(process.env.PORT) || 3001;
// set the routes
routes_1.default(app);
app.listen(port, function (err) {
    if (err) {
        console.error(err);
    }
    else {
        console.log('NODE_ENV =', port);
    }
});
