type ProductsBody = {
  name: string;
  amount: string;
};

type RegisteredProduct = {
  id: number;
} & ProductsBody;

enum HttpStatus {
  CREATED = 201,
}

export { ProductsBody, RegisteredProduct, HttpStatus };