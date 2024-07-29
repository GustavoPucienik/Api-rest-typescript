"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
require("reflect-metadata");
const dataSource_1 = require("./config/dataSource");
const erro_1 = require("./middleware/erro");
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, routes_1.default)(app);
app.use(erro_1.erroMiddleware);
dataSource_1.AppDataSource.initialize()
    .then(() => {
    console.log("Banco de dados conectado");
})
    .catch((erro) => {
    console.log(erro);
});
exports.default = app;
