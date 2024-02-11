import { createSlice } from '@reduxjs/toolkit';
import { getArticlesAction } from './articlesOperations';

const articlesDBSlice = createSlice({
  name: 'articlesDB',
  initialState: {
    articlesDB: [],
    isLoading: false,
    error: null,
    totalResults: 0,
  },
  reducers: {
    clearArticlesDB(state, action) {
      state.articlesDB = [];
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getArticlesAction.pending, state => {
        state.isLoading = true;
        state.isRefreshing = false;
      })
      .addCase(getArticlesAction.fulfilled, (state, action) => {
        state.articlesDB = [...state.articlesDB, ...action.payload.articles];
        state.isLoading = false;
        state.error = null;
        state.totalResults = action.payload.totalResults;
      })
      .addCase(getArticlesAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { toggleRefresh, clearArticlesDB } = articlesDBSlice.actions;

export const articlesDBReducer = articlesDBSlice.reducer;
