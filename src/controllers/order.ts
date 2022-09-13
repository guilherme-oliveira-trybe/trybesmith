import { Request, Response } from 'express';
import { OrderService } from '../services';
import * as types from '../types';

const OrderController = {
  getAll: async (_req: Request, res: Response) => {
    const result = await OrderService.getAll();

    return res.status(types.HttpStatus.OK).json(result);
  },
};

export default OrderController;