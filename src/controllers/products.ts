import { Request, Response } from 'express';
import ProductsService from '../services';
import * as types from '../types';

const ProductsController = {
  create: async (req: Request, res: Response) => {
    const { name, amount } = req.body as unknown as types.ProductsBody;
    const result = await ProductsService.create({ name, amount });

    return res.status(types.HttpStatus.CREATED).json(result);
  },
  getAll: async (_req: Request, res: Response) => {
    const result = await ProductsService.getAll();

    return res.status(types.HttpStatus.OK).json(result);
  },
};

export default ProductsController;