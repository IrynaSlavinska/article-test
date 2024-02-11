import { createSlice } from '@reduxjs/toolkit';

const articlesSlice = createSlice({
  name: 'articles',
  initialState: { articles: [] },
  reducers: {
    addArticleAction: (state, action) => {
      state.articles = [...state.articles, action.payload];
    },
    removeArticleAction: (state, action) => {
      state.articles = state.articles.filter(art => art.id !== action.payload);
    },
    replaceArticleAction: (state, action) => {
      state.articles = action.payload;
    },
  },
});

export const { addArticleAction, removeArticleAction, replaceArticleAction } =
  articlesSlice.actions;
export const articlesReducer = articlesSlice.reducer;
