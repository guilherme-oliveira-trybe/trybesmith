import express from 'express';
import * as routes from './routes';

const app = express();

app.use(express.json());

app.use('/products', routes.productRouter);
app.use('/users', routes.userRouter);
app.use('/orders', routes.orderRouter);

export default app;
