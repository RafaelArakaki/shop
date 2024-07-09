import { DisplayNumberStyle } from './styles';
import type { Product } from '@/types/products';

type InputNumberProps = {
  amount: number,
  sumCalcule: () => void,
  minusCalcule: () => void,
}

const InputNumber: React.FC<InputNumberProps> = (props) => {
  const {
    amount,
    sumCalcule,
    minusCalcule
  } = props;

  return (
    <div>
      <span>Qtd</span>
      <DisplayNumberStyle>
        <button
          className='minus'
          onClick={minusCalcule}
        >
          -
        </button>
        <div className='amount'>{amount}</div>
        <button
          className='sum'
          onClick={sumCalcule}
        >
          +
        </button>
      </DisplayNumberStyle>
    </div>    
  )
}

export default InputNumber;