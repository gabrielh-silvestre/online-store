import { createReducer } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

import { addFavoriteItem, FavoriteItem, removeFavoriteItem } from '../actions';

const INITIAL_STATE = [] as Array<FavoriteItem>;

export const FavoriteReducer = createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(addFavoriteItem, (state, { payload }) => {
    toast.success(`${payload.title}`, {
      id: payload.id,
      className: 'max-h-20 py-4 truncate',
    });

    state.push(payload);
  });

  builder.addCase(removeFavoriteItem, (state, { payload }) => {
    toast.error(`${payload.title}`, {
      id: payload.id,
      className: 'max-h-20 py-4 truncate',
    });

    const favoriteIndex = state.findIndex((item) => item.id === payload.id);
    state.splice(favoriteIndex, 1);
  });
});
