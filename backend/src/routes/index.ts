import { Router } from 'express';
import registerRouter from './register.routes';
import loginRouter from './login.routes';
import profileRouter from './profile.routes';

const router = Router();

router.use('/api/register', registerRouter);
router.use('/api/login', loginRouter);
router.use('/api/profile', profileRouter);

export default router;