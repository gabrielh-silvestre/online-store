import Image from 'next/image';

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import {
  Container,
  ProductName,
  ProductPrice,
  ProductQuantity,
} from './styles';

import { CartItem as CartItemCardProps } from '../../actions';

export function CartItemCard(props: CartItemCardProps) {
  const formatPrice = () => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: props.currency_id,
    }).format(props.price);
  };

  return (
    <Container>
      <Image
        width={90}
        height={90}
        src={props.thumbnail}
        alt={props.title}
      />
      <ProductName>{props.title}</ProductName>
      <p className="text-xs text-center">
        Quant:
        <ProductQuantity>
          <HiChevronLeft className="w-6 h-6 text-red" />
          {props.quantity}
          <HiChevronRight className="w-6 h-6 text-red" />
        </ProductQuantity>
      </p>
      <ProductPrice>{formatPrice()}</ProductPrice>
    </Container>
  );
}
