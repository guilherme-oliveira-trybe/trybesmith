import { Request, Response, NextFunction } from 'express';
import { NewError } from '../types';

const errorMiddleware = (err: NewError, _req: Request, res: Response, _next: NextFunction) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
};

export default errorMiddleware;