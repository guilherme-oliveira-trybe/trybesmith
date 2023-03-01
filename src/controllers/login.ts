import { Request, Response } from 'express';
import { LoginService } from '../services';
import * as types from '../types';

const LoginController = {
  login: async (req: Request, res: Response) => {
    const { username, password } = req.body as unknown as types.LoginBody;
    const result: types.UserToken = await LoginService.login({ username, password });

    return res.status(types.HttpStatus.OK).json(result);
  },
};

export default LoginController;