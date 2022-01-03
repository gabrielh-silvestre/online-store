import { createReducer } from '@reduxjs/toolkit';

import { addFavoriteItem, FavoriteItem, removeFavoriteItem } from '../actions';

const INITIAL_STATE = [] as Array<FavoriteItem>;

export const FavoriteReducer = createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(addFavoriteItem, (state, { payload }) => {
    state.push(payload);
  });

  builder.addCase(removeFavoriteItem, (state, { payload }) => {
    const favoriteIndex = state.findIndex((item) => item.id === payload);
    state.splice(favoriteIndex, 1);
  });
});
