import { createReducer } from '@reduxjs/toolkit';
import { addCartItem, CartItem as CartState } from '../actions';

const INITIAL_STATE = [] as Array<CartState>;

export const CartReducer = createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(addCartItem, (state, { payload }) => {
    const cartItem = state.find((item) => item.id === payload.id);

    !cartItem ? state.push(payload) : (cartItem.quantity += 1);
  });
});
