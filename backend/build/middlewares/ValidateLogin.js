"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mapStatusHTTP_1 = __importDefault(require("../utils/mapStatusHTTP"));
class ValidateLogin {
    static validateFields(req, res, next) {
        const fields = req.body;
        const requiredKeys = ['email', 'password'];
        for (let index = 0; index < requiredKeys.length; index += 1) {
            const notFoundKey = requiredKeys[index];
            if (!(notFoundKey in fields)) {
                return res.status((0, mapStatusHTTP_1.default)('INVALID_DATA'))
                    .json({ message: 'All fields must be filled' });
            }
        }
        if (!fields.email || !fields.password) {
            return res.status((0, mapStatusHTTP_1.default)('INVALID_DATA'))
                .json({ message: 'All fields must be filled' });
        }
        const regex = /\S+@\S+\.\S+/;
        if (!regex.test(fields.email) || fields.password.length < 6) {
            return res.status(401).json({ message: 'Email ou senha incorretos' });
        }
        return next();
    }
}
exports.default = ValidateLogin;
