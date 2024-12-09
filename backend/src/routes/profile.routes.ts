import { Request, Router, Response, NextFunction } from 'express';
import ValidateToken from './../middlewares/ValidateToken';
import ProfileController from '../controllers/ProfileController';

const profileController = new ProfileController();
const router = Router();

router.get(
  '/',
  (req: Request, res: Response, next: NextFunction) => { ValidateToken.validateToken(req, res, next) },
  (req: Request, res: Response) => { profileController.getUser(req, res) }
);

export default router;