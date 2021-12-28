import { RootState } from '../../store';

import { useSelector } from 'react-redux';
import { CartItemCard } from '../CartItemCard';

export function CartItems() {
  const cart = useSelector(({ cart }: RootState) => cart);

  return (
    <>
      {cart.map((item) => (
        <CartItemCard key={item.id} {...item} />
      ))}
    </>
  );
}
