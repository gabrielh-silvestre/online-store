import { createAction } from '@reduxjs/toolkit';

export interface CartItem {
  id: string;
  title: string;
  price: number;
  currency_id: string;
  available_quantity: number;
  quantity: number;
  thumbnail: string;
  shipping: {
    free_shipping: boolean;
  };
}

type CartItemQuantity = Pick<CartItem, 'id' | 'quantity'>;
type CartItemIdetifier = Pick<CartItem, 'id'>;
export type FavoriteItem = Omit<CartItem, 'quantity'>;

export const setSearchTerm = createAction<string>('search/term');

export const setCategory = createAction<string>('search/category');

export const addCartItem = createAction<CartItem>('cart/add');

export const removeCartItem = createAction<CartItemIdetifier>('cart/remove');

export const setQuantity = createAction<CartItemQuantity>('cart/setQuantity');

export const clearCart = createAction('cart/clear');

export const addFavoriteItem = createAction<FavoriteItem>('favorite/add');

export const removeFavoriteItem = createAction<string>('favorite/remove');
