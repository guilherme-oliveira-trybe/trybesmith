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

type UsersBody = {
  username: string;
  classe: string;
  level: number;
  password: string;
};

type UserToken = {
  token: string;
};

enum HttpStatus {
  CREATED = 201,
  OK = 200,
}

export { ProductsBody, RegisteredProduct, HttpStatus, Product, UsersBody, UserToken };