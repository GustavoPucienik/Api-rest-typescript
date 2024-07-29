"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.erroMiddleware = void 0;
const EnumHttpStatusCode_1 = require("../Enum/EnumHttpStatusCode");
const erroMiddleware = (erro, req, res, next) => {
    var _a;
    const statusCode = (_a = erro.statusCode) !== null && _a !== void 0 ? _a : EnumHttpStatusCode_1.EnumHttpStatusCode.INTERNAL_SERVER_ERROR;
    const mensagem = erro.statusCode ? erro.message : "Erro interno do servidor";
    res.status(statusCode).json({ mensagem });
    return next();
};
exports.erroMiddleware = erroMiddleware;
