"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const register_routes_1 = __importDefault(require("./register.routes"));
// import loginRouter from './login.routes';
// import profileRouter from './profile.routes';
const router = (0, express_1.Router)();
router.use('/api/register', register_routes_1.default);
// router.use('/api/login', loginRouter);
// router.use('/api/profile', profileRouter);
exports.default = router;
