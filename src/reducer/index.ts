import { combineReducers } from '@reduxjs/toolkit';

import { SearchReducer } from './searchReducer';

const rootReducer = combineReducers({ search: SearchReducer });

export default rootReducer;
