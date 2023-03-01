import { LoginModel } from '../models';
import tokenHelper from '../helpers/tokenHelper';
import CustomError from '../errors/customError';
import * as types from '../types';

const LoginService = {
  login: async ({ username, password }: types.LoginBody) => {
    const user = await LoginModel.getUser({ username, password });

    if (!user) throw new CustomError(401, 'Username or password invalid');

    const token = tokenHelper.createToken({ username });

    return { token } as types.UserToken;
  },
};

export default LoginService;