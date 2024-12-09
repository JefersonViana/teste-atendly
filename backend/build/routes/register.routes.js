"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RegisterController_1 = __importDefault(require("../controllers/RegisterController"));
const ValidateFields_1 = __importDefault(require("./../middlewares/ValidateFields"));
const registerController = new RegisterController_1.default();
const router = (0, express_1.Router)();
router.post('/', (req, res, next) => { ValidateFields_1.default.validateFields(req, res, next); }, (req, res) => {
    registerController.createRegister(req, res);
});
exports.default = router;
