import { Router } from 'express';
import ProductsController from '../controllers';

const productRouter = Router();

productRouter.post('/', ProductsController.create);
productRouter.get('/', ProductsController.getAll);

export default productRouter;