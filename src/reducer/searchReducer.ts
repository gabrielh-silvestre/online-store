import { createReducer } from '@reduxjs/toolkit';
import { setCategory, setSearchTerm } from '../actions';

interface SearchState {
  searchTerm?: string;
  category?: string;
}

const INITIAL_STATE = { searchTerm: '', category: '' } as SearchState;

export const SearchReducer = createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(setSearchTerm, (state, { payload }) => {
    state.searchTerm = payload;
  });

  builder.addCase(setCategory, (state, { payload }) => {
    state.category = payload;
  });
});
