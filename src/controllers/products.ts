import { Request, Response } from 'express';
import ProductsService from '../services';
import { ProductsBody, HttpStatus } from '../types';

const ProductsController = {
  create: async (req: Request, res: Response) => {
    const { name, amount } = req.body as unknown as ProductsBody;
    const result = await ProductsService.create({ name, amount });

    return res.status(HttpStatus.CREATED).json(result);
  },
  getAll: async (_req: Request, res: Response) => {
    const result = await ProductsService.getAll();

    return res.status(HttpStatus.OK).json(result);
  },
};

export default ProductsController;