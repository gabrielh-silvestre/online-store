import { combineReducers } from '@reduxjs/toolkit';

import { CartReducer } from './cartReducer';
import { FavoriteReducer } from './favoriteReducer';
import { SearchReducer } from './searchReducer';

const rootReducer = combineReducers({
  search: SearchReducer,
  cart: CartReducer,
  favorite: FavoriteReducer,
});

export default rootReducer;
