import { Router } from 'express';
import { LoginController } from '../controllers';

const loginRouter = Router();

loginRouter.get('/', LoginController.login);

export default loginRouter;