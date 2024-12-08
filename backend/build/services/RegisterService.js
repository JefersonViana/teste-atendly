"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RegisterModel_1 = __importDefault(require("../models/RegisterModel"));
class RegisterService {
    constructor() {
        this.registerModel = new RegisterModel_1.default();
    }
    createRegister(_a) {
        return __awaiter(this, arguments, void 0, function* ({ name, email, password }) {
            try {
                const register = yield this.registerModel.createRegister({ name, email, password });
                return { status: 'SUCCESSFUL', data: register };
            }
            catch (error) {
                return { status: 'ERROR', data: { message: error.message } };
            }
        });
    }
}
exports.default = RegisterService;
