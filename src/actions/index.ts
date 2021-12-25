import { createAction } from '@reduxjs/toolkit';

export const setSearchTerm = createAction<string>('search/term');

export const setCategory = createAction<string>('search/category');
