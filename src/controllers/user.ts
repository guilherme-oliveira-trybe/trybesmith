import { Request, Response } from 'express';
import { UserService } from '../services';
import * as types from '../types';

const UserController = {
  create: async (req: Request, res: Response) => {
    const { username, classe, level, password } = req.body as unknown as types.UsersBody;
    const result: types.UserToken = await UserService.create({ username, classe, level, password });

    return res.status(types.HttpStatus.CREATED).json(result);
  },
};

export default UserController;