import Image from 'next/image';
import mksSVG from "@/assets/images/mks-sistemas.svg";
import Menu from '@/components/Menu';

import { HeaderStyle } from './styles';

const Header = () => {
  return (
    <HeaderStyle>
      <Image
        src={mksSVG}
        alt="MKS Sistemas"
      />
      <Menu />
    </HeaderStyle>
  )
}

export default Header;