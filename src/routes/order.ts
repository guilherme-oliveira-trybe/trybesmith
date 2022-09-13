import { Router } from 'express';
import { OrderController } from '../controllers';

const orderRouter = Router();

orderRouter.get('/', OrderController.getAll);

export default orderRouter;