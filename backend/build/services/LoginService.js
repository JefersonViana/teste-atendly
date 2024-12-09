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
const UserModel_1 = __importDefault(require("../models/UserModel"));
const bcrypt_1 = require("./../utils/bcrypt");
const jwt_1 = __importDefault(require("./../utils/jwt"));
class RegisterService {
    constructor() {
        this.registerModel = new UserModel_1.default();
    }
    login(_a) {
        return __awaiter(this, arguments, void 0, function* ({ email, password }) {
            try {
                // validar a existencia do usuário
                const user = yield this.registerModel.findRegisterByEmail(email);
                console.log(user === null || user === void 0 ? void 0 : user.dataValues);
                if (!user) {
                    return { status: 'ERROR', data: { message: 'User not found' } };
                }
                if (!(yield (0, bcrypt_1.comparePassword)(password, user.dataValues.password))) {
                    return { status: 'ERROR', data: { message: 'Incorrect username or password' } };
                }
                const token = (0, jwt_1.default)(user.dataValues);
                return { status: 'SUCCESSFUL', data: { token } };
            }
            catch (error) {
                return { status: 'ERROR', data: { message: error.message } };
            }
        });
    }
}
exports.default = RegisterService;
