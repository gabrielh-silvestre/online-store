import { createAction } from '@reduxjs/toolkit';

export interface CartItem {
  id: string;
  title: string;
  price: number;
  currency_id: string;
  quantity: number;
  thumbnail: string;
  shipping: {
    free_shipping: boolean;
  };
}

type CartItemQuantity = Pick<CartItem, 'id' | 'quantity'>;

export const setSearchTerm = createAction<string>('search/term');

export const setCategory = createAction<string>('search/category');

export const addCartItem = createAction<CartItem>('cart/add');

export const setQuantity = createAction<CartItemQuantity>('cart/setQuantity');
