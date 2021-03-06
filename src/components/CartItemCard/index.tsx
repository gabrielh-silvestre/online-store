import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Image from 'next/image';

import {
  CartItem as CartItemCardProps,
  removeCartItem,
  setQuantity,
} from '../../actions';

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import {
  Container,
  ProductName,
  ProductPrice,
  ProductQuantity,
} from './styles';
import Link from 'next/link';

export function CartItemCard(props: CartItemCardProps) {
  const dispatch = useDispatch();
  const [hasMaxQuantity, setHasMaxQuantity] = useState(false);

  const handleArrowClick = (
    id: string,
    quantity: number,
    increment?: boolean
  ) => {
    if (increment) {
      dispatch(setQuantity({ id, quantity: (quantity += 1) }));
    } else {
      quantity <= 1
        ? dispatch(removeCartItem(props))
        : dispatch(setQuantity({ id, quantity: (quantity -= 1) }));
    }
  };

  const formatPrice = () => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: props.currency_id,
    }).format(props.price);
  };

  useEffect(() => {
    setHasMaxQuantity(props.quantity < props.available_quantity);
  }, [props]);

  return (
    <Container>
      <Link href={`/product/${props.id}`} passHref>
        <Image width={90} height={90} src={props.thumbnail} alt={props.title} />
      </Link>
      <ProductName>{props.title}</ProductName>
      <div className="text-xs text-center self-center">
        Quant:
        <ProductQuantity>
          <button
            type="button"
            className="text-red disabled:text-opacity-50"
            onClick={() => {
              handleArrowClick(props.id, props.quantity);
            }}
          >
            <HiChevronLeft className="w-6 h-6" />
          </button>
          <span>{props.quantity}</span>
          <button
            type="button"
            disabled={!hasMaxQuantity}
            className="text-red disabled:text-opacity-50"
            onClick={() => {
              handleArrowClick(props.id, props.quantity, true);
            }}
          >
            <HiChevronRight className="w-6 h-6" />
          </button>
        </ProductQuantity>
      </div>
      <ProductPrice>{formatPrice()}</ProductPrice>
    </Container>
  );
}
