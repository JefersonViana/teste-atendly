import { Request, Router, Response } from 'express';

const router = Router();

  router.get('/', (req: Request, res: Response ) => { res.send('Login route') });

export default router;