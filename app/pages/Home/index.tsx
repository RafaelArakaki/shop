import { useEffect } from "react";

import { DisplayProducts } from './styles'; 
import CardProduct from "@/components/CardProduct";
import { useProductsContext } from '@/context/Context';
import { Product } from '@/types/products';
import { sortableName } from '@/helpers/sortable';
import useProductsApi from '@/services/api/productsAPI';
import { useQuery } from "react-query";

const Home = () => {
  const { listProducts, setListProducts } = useProductsContext();

  const { getProducts } = useProductsApi();

  useEffect(() => {
    (async () => {
      const data = await getProducts();
      console.log(data)
      const listUpdate = data.map((item: Product) => ({
        ...item, amount: 0
      }));
      setListProducts(listUpdate);
    })();
    
  }, []); 
  
  const filteredListProducts = sortableName(listProducts);

  return (
    <DisplayProducts>
      {filteredListProducts.map((item) => (
        <CardProduct
          key={item.id}
          product={item}
        />       
      ))}
    </DisplayProducts>    
  );
}

export default Home;