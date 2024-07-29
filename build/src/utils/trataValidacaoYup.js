"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tratarErroValidacaoYup = (esquema, req, res, next) => {
    try {
        esquema.validateSync(req.body, { abortEarly: false });
        next();
    }
    catch (erros) {
        const errosYup = erros;
        const errosDeValidacao = {};
        errosYup.inner.forEach((erro) => {
            if (erro.path) {
                errosDeValidacao[erro.path] = erro.message;
            }
        });
        res.status(400).json({ erros: errosDeValidacao });
    }
};
exports.default = tratarErroValidacaoYup;
