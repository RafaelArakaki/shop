export type Product = {
  id: number | null,
  name: string,
  description: string,
  photo: string,
  price: string,
  amount: number,
}

export type ProductsList = Array<Product>;

export type ProducstInCart = {
  id: number | null,
  name: string,
  description: string,
  photo: string,
  price: string,
  amount: number,
}

export type ProductsInCartList = Array<Product>;