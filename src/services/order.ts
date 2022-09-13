import { OrderModel } from '../models';
// import * as types from '../types';

const OrderService = {
  getAll: async () => {
    const result = await OrderModel.getAll();

    return result;
  },
};

export default OrderService;