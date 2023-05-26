import { Router } from 'express';
import userController from '../controllers/user.controller';
import authMiddleware from '../middlewares/auth.middleware';

const userRouter = Router();
userRouter.post('/login', userController.login);
userRouter.use(authMiddleware);
userRouter.get('/users', userController.findAll);

export default userRouter;