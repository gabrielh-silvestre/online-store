import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiSearch } from '../services/api';

interface SearchOptions {
  term?: string;
  category?: string;
}

export const fetchProducts = createAsyncThunk(
  'fetch/products',
  async (seach: SearchOptions) => {
    const res = await apiSearch(seach);
    return res.data;
  }
);
