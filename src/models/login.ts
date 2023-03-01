import { RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import * as types from '../types';

const LoginModel = {
  getUser: async ({ username, password }: types.LoginBody) => {
    const query = `
    SELECT username, password 
    FROM Trybesmith.Users 
    WHERE username = ? AND password = ?`;

    const [[result]] = await connection.execute<RowDataPacket[]>(query, [username, password]);

    return result as types.LoginBody;
  },
};

export default LoginModel;