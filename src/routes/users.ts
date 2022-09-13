import { Router } from 'express';
import { UserController } from '../controllers';

const userRouter = Router();

userRouter.post('/', UserController.create);

export default userRouter;