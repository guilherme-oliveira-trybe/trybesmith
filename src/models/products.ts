import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import * as types from '../types';

const ProductsModel = {
  create: async ({ name, amount }: types.ProductsBody) => {
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const [{ insertId }] = await connection.execute<ResultSetHeader>(query, [name, amount]);

    return { id: insertId, name, amount } as types.RegisteredProduct;
  },
  getAll: async () => {
    const query = 'SELECT id, name, amount, orderId FROM Trybesmith.Products';
    const [result] = await connection.execute<RowDataPacket[]>(query);

    return result as types.Product[];
  },
};

export default ProductsModel;