import { Router } from 'express';
import AuthController from '../controllers/AuthController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.post('/register', AuthController.register.bind(AuthController));
router.post('/login', AuthController.login.bind(AuthController));
router.post('/logout', authMiddleware, AuthController.logout.bind(AuthController));
router.post('/refresh', AuthController.refresh.bind(AuthController));

export default router;
