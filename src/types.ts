type ProductsBody = {
  name: string;
  amount: string;
};

type RegisteredProduct = {
  id: number;
} & ProductsBody;

type Product = {
  id: number,
  name: string,
  amount: string,
  orderId: number | null
};

enum HttpStatus {
  CREATED = 201,
  OK = 200,
}

export { ProductsBody, RegisteredProduct, HttpStatus, Product };