import { createReducer } from '@reduxjs/toolkit';

import { fetchProducts } from '../actions';

interface ProductsState {
  products:
    | Array<{
        id: string;
        title: string;
        price: number;
        currency_id: string;
        avaible_quantity: number;
        thumbnail: string;
        shipping: {
          free_shipping: boolean;
        };
      }>
    | [];
  isLoading: boolean;
}

const INITIAL_STATE = { products: [], isLoading: false } as ProductsState;

export const ProductsReducer = createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(fetchProducts.pending, (state) => {
    state.isLoading = true;
  });

  builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
    state.products = payload ? payload.results : [];
    state.isLoading = false;
  });
});
