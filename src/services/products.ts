import ProductsModel from '../models';
import { Product, ProductsBody, RegisteredProduct } from '../types';

const ProductsService = {
  create: async ({ name, amount }: ProductsBody): Promise<RegisteredProduct> => {
    const result = await ProductsModel.create({ name, amount });

    return result as RegisteredProduct;
  },
  getAll: async (): Promise<Product[]> => {
    const result = await ProductsModel.getAll();

    return result as Product[];
  },
};

export default ProductsService;