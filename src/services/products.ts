import { ProductsModel } from '../models';
import * as types from '../types';

const ProductsService = {
  create: async ({ name, amount }: types.ProductsBody): Promise<types.RegisteredProduct> => {
    const result = await ProductsModel.create({ name, amount });

    return result as types.RegisteredProduct;
  },
  getAll: async (): Promise<types.Product[]> => {
    const result = await ProductsModel.getAll();

    return result as types.Product[];
  },
};

export default ProductsService;