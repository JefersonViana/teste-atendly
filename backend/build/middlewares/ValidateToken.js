"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const jsonwebtoken_1 = require("jsonwebtoken");
const secret = process.env.SECRET_KEY;
class ValidateToken {
    static validateToken(req, res, next) {
        const { authorization } = req.headers;
        if (!authorization)
            return res.status(401).json({ message: 'Token not found' });
        try {
            const payload = (0, jsonwebtoken_1.verify)(authorization.replace('Bearer: ', ''), secret);
            req.body.payload = payload;
            return next();
        }
        catch (error) {
            return res.status(401).json({ message: 'Token must be a valid token' });
        }
    }
}
exports.default = ValidateToken;
