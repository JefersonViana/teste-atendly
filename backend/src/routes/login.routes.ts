import { Request, Router, Response } from 'express';
import ValidateLogin from '../middlewares/ValidateLogin';
import LoginController from './../controllers/LoginController';

const loginController = new LoginController();
const router = Router();

router.post(
  '/',
  (req: Request, res: Response, next) => { ValidateLogin.validateFields(req, res, next); },
  (req: Request, res: Response ) => { loginController.login(req, res); },
);

export default router;