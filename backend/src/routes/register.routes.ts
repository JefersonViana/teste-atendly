import { Request, Router, Response } from 'express';
import RegisterController from '../controllers/RegisterController';
import ValidateFields from './../middlewares/ValidateFields';

const registerController = new RegisterController();

const router = Router();

router.post(
  '/',
  (req: Request, res: Response, next) => { ValidateFields.validateFields(req, res, next); },
  (req: Request, res: Response) => {
    registerController.createRegister(req, res);
  },
);

export default router;