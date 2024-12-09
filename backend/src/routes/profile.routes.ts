import { Request, Router, Response, NextFunction } from 'express';
import ValidateToken from './../middlewares/ValidateToken';

const router = Router();

router.get(
  '/',
  (req: Request, res: Response, next: NextFunction) => { ValidateToken.validateToken(req, res, next) },
  (req: Request, res: Response) => { res.send('Profile route') }
);

export default router;