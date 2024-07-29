"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verificaIdMiddleware = void 0;
const manipulaErros_1 = require("../utils/manipulaErros");
const verificaIdMiddleware = (req, res, next) => {
    const params = Object.assign({}, req.params);
    for (const param in params) {
        if (!Number.isInteger(Number(params[param]))) {
            throw new manipulaErros_1.RequisicaoRuim(`O parametro ${param} deve ser um número inteiro.`);
        }
    }
    return next();
};
exports.verificaIdMiddleware = verificaIdMiddleware;
