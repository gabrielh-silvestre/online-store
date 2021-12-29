import { createReducer } from '@reduxjs/toolkit';
import {
  addCartItem,
  CartItem as CartState,
  clearCart,
  removeCartItem,
  setQuantity,
} from '../actions';

const INITIAL_STATE = [] as Array<CartState>;

export const CartReducer = createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(addCartItem, (state, { payload }) => {
    const cartItem = state.find((item) => item.id === payload.id);

    !cartItem ? state.push(payload) : (cartItem.quantity += 1);
  });

  builder.addCase(setQuantity, (state, { payload }) => {
    const cartItemIndex = state.findIndex((item) => item.id === payload.id);
    state[cartItemIndex].quantity = payload.quantity;
  });

  builder.addCase(clearCart, (state) => {
    state.length = 0;
  });

  builder.addCase(removeCartItem, (state, { payload }) => {
    const cartItemIndex = state.findIndex((item) => item.id === payload.id);
    state.splice(cartItemIndex, 1);
  });
});
