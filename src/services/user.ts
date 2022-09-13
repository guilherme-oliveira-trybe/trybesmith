import { UserModel } from '../models';
import * as types from '../types';
import tokenHelper from '../helpers/tokenHelper';

const UserService = {
  create: async ({ username, classe, level, password }: types.UsersBody)
  : Promise<types.UserToken> => {
    await UserModel.create({ username, classe, level, password });

    const token = tokenHelper.createToken({ username });

    return { token } as types.UserToken;
  },
};

export default UserService;