import { combineReducers } from '@reduxjs/toolkit';

import { CartReducer } from './cartReducer';
import { SearchReducer } from './searchReducer';

const rootReducer = combineReducers({
  search: SearchReducer,
  cart: CartReducer,
});

export default rootReducer;
