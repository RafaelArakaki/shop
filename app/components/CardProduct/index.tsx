import Image from 'next/image';
import shopSVG from "@/assets/images/icon-shop.svg";
import { useProductsContext } from '@/context/Context';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import type { Product } from '@/types/products';

import {
  CardStyle,
  NameDisplayStyle,
  ButtonBuyStyle
} from './styles'; 
import { addItem } from '@/helpers/calculate';
import { formatCurrency } from '@/helpers/currency';

type CardProduct = {
  product: Product
}

const CardProduct: React.FC<CardProduct> = (props) => {
  const { product } = props;

  const { setListProducts, listProducts } = useProductsContext();
  
  const price = formatCurrency(product.price);

  const Loading = (item: React.ReactNode) => {
    console.log(listProducts.length )
    if (listProducts.length === 0) {
      return <Skeleton />
    }
    return item
  }


  return (
    <CardStyle>
      <div className="pad-20">        
        {Loading(
          <>
            <Image
              src={product.photo}
              alt={product.name}
              height={138}
              width={100}
              style={{
                width: 'auto',
                height: '138',
              }}
            />     
          
            <NameDisplayStyle>
              <div className="product-name">
                {product.name}
              </div>
              <div className="product-price">
                {price}
              </div>
            </NameDisplayStyle>
          </>          
        )}
      </div>
      <ButtonBuyStyle onClick={() => setListProducts(addItem(listProducts, product))}>
        <Image
          src={shopSVG}
          alt="Comprar"          
        />
        COMPRAR
      </ButtonBuyStyle>
    </CardStyle>
  );
}

export default CardProduct;
