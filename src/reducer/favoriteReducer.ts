import { createReducer } from '@reduxjs/toolkit';

import { addFavoriteItem, FavoriteItem } from '../actions';

const INITIAL_STATE = [] as Array<FavoriteItem>;

export const FavoriteReducer = createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(addFavoriteItem, (state, { payload }) => {
    state.push(payload);
  });
});
