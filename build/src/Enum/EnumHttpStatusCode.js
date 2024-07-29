"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumHttpStatusCode = void 0;
var EnumHttpStatusCode;
(function (EnumHttpStatusCode) {
    EnumHttpStatusCode[EnumHttpStatusCode["CREATED"] = 201] = "CREATED";
    EnumHttpStatusCode[EnumHttpStatusCode["NO_CONTENT"] = 204] = "NO_CONTENT";
    EnumHttpStatusCode[EnumHttpStatusCode["OK"] = 200] = "OK";
    EnumHttpStatusCode[EnumHttpStatusCode["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    EnumHttpStatusCode[EnumHttpStatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    EnumHttpStatusCode[EnumHttpStatusCode["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(EnumHttpStatusCode || (exports.EnumHttpStatusCode = EnumHttpStatusCode = {}));
