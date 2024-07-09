import type { ProductsList, Product } from '@/types/products';

export const addItem = (list: ProductsList, product: Product) => {
  const updateList = list.filter((item) => item.id !== product.id);
  const updateItem = { ...product, amount: product.amount + 1 }
  return [...updateList, updateItem];
};

export const subtractionItem = (list: ProductsList, product: Product) => {
  const updateList = list.filter((item) => item.id !== product.id);
  const updateItem = { ...product, amount: product.amount - 1 }
  return [...updateList, updateItem];
};
