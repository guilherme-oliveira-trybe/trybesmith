import { RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import * as types from '../types';

const OrderModel = {
  getAll: async () => {
    const query = `
    SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) AS productsIds
    FROM Trybesmith.Orders AS o
    INNER JOIN Trybesmith.Products AS p
    ON o.id = p.orderId
    GROUP BY o.id
    ORDER BY o.userId`;
    const [result] = await connection.execute<RowDataPacket[]>(query);

    return result as types.Order[];
  },
};

export default OrderModel;