import { useDispatch } from 'react-redux';
import Image from 'next/image';

import { CartItem as CartItemCardProps, setQuantity } from '../../actions';

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import {
  Container,
  ProductName,
  ProductPrice,
  ProductQuantity,
} from './styles';

export function CartItemCard(props: CartItemCardProps) {
  const dispatch = useDispatch();

  const handleArrowClick = (
    id: string,
    quantity: number,
    increment?: boolean
  ) => {
    increment
      ? dispatch(setQuantity({ id, quantity: (quantity += 1) }))
      : dispatch(setQuantity({ id, quantity: (quantity -= 1) }));
  };

  const formatPrice = () => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: props.currency_id,
    }).format(props.price);
  };

  return (
    <Container>
      <Image width={90} height={90} src={props.thumbnail} alt={props.title} />
      <ProductName>{props.title}</ProductName>
      <p className="text-xs text-center">
        Quant:
        <ProductQuantity>
          <HiChevronLeft
            className="w-6 h-6 text-red"
            onClick={() => {
              handleArrowClick(props.id, props.quantity);
            }}
          />
          {props.quantity}
          <HiChevronRight
            className="w-6 h-6 text-red"
            onClick={() => {
              handleArrowClick(props.id, props.quantity, true);
            }}
          />
        </ProductQuantity>
      </p>
      <ProductPrice>{formatPrice()}</ProductPrice>
    </Container>
  );
}
