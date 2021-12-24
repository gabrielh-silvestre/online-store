import { combineReducers } from '@reduxjs/toolkit';

import { ProductsReducer } from './productsReducer';

const rootReducer = combineReducers({ products: ProductsReducer });

export default rootReducer;
