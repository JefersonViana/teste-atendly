"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ValidateLogin_1 = __importDefault(require("../middlewares/ValidateLogin"));
const LoginController_1 = __importDefault(require("./../controllers/LoginController"));
const loginController = new LoginController_1.default();
const router = (0, express_1.Router)();
router.post('/', (req, res, next) => { ValidateLogin_1.default.validateFields(req, res, next); }, (req, res) => { loginController.login(req, res); });
exports.default = router;
