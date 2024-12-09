"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = generateToken;
const jsonwebtoken_1 = require("jsonwebtoken");
const config = {
    expiresIn: '1d',
    algorithm: 'HS256',
};
const secret = process.env.SECRET_KEY;
function generateToken(register) {
    const token = (0, jsonwebtoken_1.sign)(register, secret, config);
    return token;
}
