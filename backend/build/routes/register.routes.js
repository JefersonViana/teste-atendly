"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RegisterController_1 = __importDefault(require("../controllers/RegisterController"));
// import ValidateFields from './../middlewares/ValidateFields';
const registerController = new RegisterController_1.default();
const router = (0, express_1.Router)();
router.post('/', 
// ValidateFields.validateFields,
(req, res) => {
    registerController.createRegister(req, res);
});
exports.default = router;
