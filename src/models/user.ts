import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import * as types from '../types';

const UserModel = {
  create: async ({ username, classe, level, password }: types.UsersBody) => {
    const query = `INSERT INTO Trybesmith.Users (username, classe, level, password)
     VALUES (?, ?, ?, ?)`;
    const [{ insertId }] = await connection
      .execute<ResultSetHeader>(query, [username, classe, level, password]);

    return insertId;
  },
};

export default UserModel;