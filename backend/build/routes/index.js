"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const register_routes_1 = __importDefault(require("./register.routes"));
const login_routes_1 = __importDefault(require("./login.routes"));
const profile_routes_1 = __importDefault(require("./profile.routes"));
const router = (0, express_1.Router)();
router.use('/api/register', register_routes_1.default);
router.use('/api/login', login_routes_1.default);
router.use('/api/profile', profile_routes_1.default);
exports.default = router;
