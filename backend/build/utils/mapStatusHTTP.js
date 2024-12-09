"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mapStatusHTTP;
function mapStatusHTTP(status) {
    const objStatus = {
        "SUCCESSFUL": 200,
        "INVALID_DATA": 400,
        "NOT_FOUND": 404,
        "UNAUTHORIZED": 401,
    };
    return objStatus[status] || 500;
}
