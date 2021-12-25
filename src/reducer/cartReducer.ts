import { createReducer } from '@reduxjs/toolkit';
import { addCartItem, CartItem as CartState } from '../actions';

const INITIAL_STATE = [] as Array<CartState>;

export const CartReducer = createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(addCartItem, (state, { payload }) => {
    state.push(payload);
  });
});
