import { ProductsList } from '@/types/products';
import { createContext, ReactNode, useContext, useState  } from 'react';

type ProductsContextType = {
  listProducts: ProductsList,
  setListProducts: React.Dispatch<React.SetStateAction<ProductsList>>,
  listProductsInShopCart: ProductsList,
  setListProductsInShopCart: React.Dispatch<React.SetStateAction<ProductsList>>,
}

interface ProductsProviderProps {
  children: ReactNode;
}

const ProductsContext = createContext<ProductsContextType>({} as ProductsContextType);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [listProducts, setListProducts] = useState<ProductsList>([]);
  const [listProductsInShopCart, setListProductsInShopCart] = useState<ProductsList>([]);

  return (
    <ProductsContext.Provider value={{
      listProductsInShopCart,
      setListProductsInShopCart,
      listProducts,
      setListProducts
    }}>
        {children}
      </ProductsContext.Provider>
  );
}

export const useProductsContext = () => useContext(ProductsContext);