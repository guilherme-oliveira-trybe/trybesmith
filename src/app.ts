import express from 'express';
import 'express-async-errors';
import * as routes from './routes';
import errorMiddleware from './middlewares/errors';

const app = express();

app.use(express.json());

app.use('/products', routes.productRouter);
app.use('/users', routes.userRouter);
app.use('/orders', routes.orderRouter);
app.use('/login', routes.loginRouter);

app.use(errorMiddleware);

export default app;
