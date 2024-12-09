"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ValidateToken_1 = __importDefault(require("./../middlewares/ValidateToken"));
const ProfileController_1 = __importDefault(require("../controllers/ProfileController"));
const profileController = new ProfileController_1.default();
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => { ValidateToken_1.default.validateToken(req, res, next); }, (req, res) => { profileController.getUser(req, res); });
exports.default = router;
