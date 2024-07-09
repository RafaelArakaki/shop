import Image from 'next/image';
import shoppingSVG from "@/assets/images/icon-shopping.svg";
import closeSVG from "@/assets/images/icon-close.svg";
import { useProductsContext } from '@/context/Context';

import {
  ButtonShoppingStyle,
  MenuStyle,
  CountStyle,
  ButtonCloseStyle,
  HeaderStyle,
  ContainerProductStyle,
  TotalStyle,
  ButtonBuyStyle
} from './styles'; 
import { useState } from 'react';
import { Product } from '@/types/products';
import CardProductInShop from '../CardProductInShop';
import { sortableName } from "@/helpers/sortable";
import { formatCurrency } from '@/helpers/currency';
import { motion } from "framer-motion";


const Menu = () => {
  const { listProducts } = useProductsContext();

  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [x, setX] = useState(0);

  const totalItems = listProducts.reduce((total: number, item: Product) => total + item.amount, 0);

  const list = listProducts.filter((item) => item.amount > 0);
  const sortableListProducts = sortableName(list);

  const totalPriceItems = () => {
    const list = listProducts.filter((item) => item.amount > 0);
    const total = list.map(item => item.amount * Number(item.price))
      .reduce((a, b) => a + b, 0);
    return formatCurrency(total);
  }

  const show = () => {
    setShowMenu(true);
    setX(-500)
  }

  return (
    <>
      <ButtonShoppingStyle onClick={() => show()}>
        <Image
          src={shoppingSVG}
          alt="Comprar"
        />
        <CountStyle>{totalItems}</CountStyle>        
      </ButtonShoppingStyle>
      {showMenu && (
        <MenuStyle>
          <HeaderStyle>
            <ButtonCloseStyle onClick={() => setShowMenu(false)}>
              <Image
                src={closeSVG}
                alt="Fechar"
              />
            </ButtonCloseStyle>
            <h2>
              Carrinho<br />
              de compras
            </h2>
          </HeaderStyle>

          <ContainerProductStyle>
            {sortableListProducts.map((item) => (
              <CardProductInShop
                key={item.id}
                product={item}
              />
            ))}              
          </ContainerProductStyle>
          
          <TotalStyle>
            <div>Total</div>
            <div>{totalPriceItems()}</div>
          </TotalStyle>
          <ButtonBuyStyle>
            Finalizar Compra
          </ButtonBuyStyle>
        </MenuStyle>
      )}
      
    </>
  )
}

export default Menu;