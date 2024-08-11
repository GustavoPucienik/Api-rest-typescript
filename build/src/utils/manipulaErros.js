"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NaoEncontrado = exports.RequisicaoRuim = exports.ManipulaErros = void 0;
const EnumHttpStatusCode_1 = require("../Enum/EnumHttpStatusCode");
class ManipulaErros extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}
exports.ManipulaErros = ManipulaErros;
class RequisicaoRuim extends ManipulaErros {
    constructor(message) {
        super(message, EnumHttpStatusCode_1.EnumHttpStatusCode.BAD_REQUEST);
    }
}
exports.RequisicaoRuim = RequisicaoRuim;
class NaoEncontrado extends ManipulaErros {
    constructor(message) {
        super(message, EnumHttpStatusCode_1.EnumHttpStatusCode.NOT_FOUND);
    }
}
exports.NaoEncontrado = NaoEncontrado;
