import { createReducer } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

import { addFavoriteItem, FavoriteItem, removeFavoriteItem } from '../actions';

const INITIAL_STATE = [] as Array<FavoriteItem>;

export const FavoriteReducer = createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(addFavoriteItem, (state, { payload }) => {
    toast.success(`${payload.title} adicionado aos favoritos`, {
      id: payload.id,
      className: 'max-h-20 py-2 overflow-clip hover:overflow-y-auto',
    });

    state.push(payload);
  });

  builder.addCase(removeFavoriteItem, (state, { payload }) => {
    toast.error(`${payload.title} removido dos favoritos`, {
      id: payload.id,
      className: 'max-h-20 py-2 overflow-clip hover:overflow-y-auto',
    });

    const favoriteIndex = state.findIndex((item) => item.id === payload.id);
    state.splice(favoriteIndex, 1);
  });
});
