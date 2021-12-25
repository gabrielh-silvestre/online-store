import { useDispatch } from 'react-redux';

import { addCartItem, CartItem } from '../../actions';

import { Button } from './style';

type BuyButtonProps = Omit<CartItem, 'quantity'>;

export function BuyButton({
  id,
  title,
  price,
  currency_id,
  shipping,
  thumbnail,
}: BuyButtonProps) {
  const dispatch = useDispatch();

  const handleAddCart = () => {
    dispatch(
      addCartItem({
        id,
        title,
        price,
        currency_id,
        shipping,
        thumbnail,
        quantity: 1,
      })
    );
  };

  return <Button onClick={handleAddCart}>Comprar</Button>;
}
