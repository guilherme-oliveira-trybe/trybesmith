import ProductsModel from '../models';
import { ProductsBody, RegisteredProduct } from '../types';

const ProductsService = {
  create: async ({ name, amount }: ProductsBody) => {
    const result = await ProductsModel.create({ name, amount });

    return result as RegisteredProduct;
  },
};

export default ProductsService;