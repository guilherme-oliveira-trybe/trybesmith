type ProductsBody = {
  name: string;
  amount: string;
};

type RegisteredProduct = {
  id: number;
} & ProductsBody;

export { ProductsBody, RegisteredProduct };