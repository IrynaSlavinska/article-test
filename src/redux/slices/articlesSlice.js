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
      const newArray = [...state.articles];
      const { id } = action.payload;

      const elementToMove = newArray.splice(id, 1)[0];
      newArray.unshift(elementToMove);
      return {
        ...state,
        array: newArray,
      };
    },
  },
});

export const { addArticleAction, removeArticleAction, replaceArticleAction } =
  articlesSlice.actions;
export const articlesReducer = articlesSlice.reducer;
