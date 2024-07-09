import InputNumber from '../InputNumber';
import Image from 'next/image';
import { useProductsContext } from '@/context/Context';

import type { Product } from '@/types/products';

import {
  CardProductStyle,
  DescritionStyle,
  PriceStyle,
} from './styles'; 
import { addItem, subtractionItem } from '@/helpers/calculate';
import { formatCurrency } from '@/helpers/currency';

type CardProduct = {
  product: Product
}

const CardProductInShop: React.FC<CardProduct> = (props) => {
  const { product } = props;

  const { setListProducts, listProducts } = useProductsContext();

  const price = product.amount * Number(product.price);

  return (
    <CardProductStyle>
      <Image
        src={product.photo}
        alt={product.name}
        width={50}
        height={50}
        className='img-responsive-thumb'
      />
      <DescritionStyle>{product.name}</DescritionStyle>
      <InputNumber
        sumCalcule={() => setListProducts(addItem(listProducts, product))}
        minusCalcule={() => setListProducts(subtractionItem(listProducts, product))}
        amount={product.amount}
      /> 
      <PriceStyle>{formatCurrency(price)}</PriceStyle>              
    </CardProductStyle>
  );
}

export default CardProductInShop;
