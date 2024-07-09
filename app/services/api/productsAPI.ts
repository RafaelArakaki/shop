import { ProductsList } from '@/types/products';
import axios from 'axios';

const useProductsApi = () => {
  const getProducts = async () => 
    axios.get('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=name&orderBy=ASC')
      .then((response) => {
        return response.data.products as ProductsList
      })   
  return { getProducts }
}

export default useProductsApi;