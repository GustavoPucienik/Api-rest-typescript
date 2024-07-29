"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProdutoRouter_1 = __importDefault(require("./ProdutoRouter"));
const router = (app) => {
    app.use("/produtos", ProdutoRouter_1.default);
};
exports.default = router;
