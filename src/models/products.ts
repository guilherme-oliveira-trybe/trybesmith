import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { ProductsBody, RegisteredProduct } from '../types';

const ProductsModel = {
  create: async ({ name, amount }: ProductsBody) => {
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const [{ insertId }] = await connection.execute<ResultSetHeader>(query, [name, amount]);

    return { id: insertId, name, amount } as RegisteredProduct;
  },
};

export default ProductsModel;