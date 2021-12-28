import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store';

import { BillInfo, BillValue, FinalPrice } from './styles';

interface billState {
  price: number;
  shipping: number;
  total: number;
}

export function Bill() {
  const [bill, setBill] = useState<billState>({} as billState);
  const cart = useSelector(({ cart }: RootState) => cart);

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  useEffect(() => {
    const cartItemsPrice = cart.reduce(
      (acc, { price, shipping }) => {
        if (shipping.free_shipping) acc.shipping = 14.99;
        acc.price += price;
        acc.total += price + acc.shipping;
        return acc;
      },
      { price: 0, shipping: 0, total: 0 }
    );

    setBill(cartItemsPrice);
  }, [cart]);

  return (
    <>
      <div>
        <BillInfo>
          Valor: <BillValue>{formatPrice(bill.price)}</BillValue>
        </BillInfo>
        <BillInfo>
          Frete: <BillValue>{formatPrice(bill.shipping)}</BillValue>
        </BillInfo>
        <BillInfo>
          Total: <BillValue>{formatPrice(bill.total)}</BillValue>
        </BillInfo>
      </div>

      <FinalPrice>R$200,00</FinalPrice>
    </>
  );
}
