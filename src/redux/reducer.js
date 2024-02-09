import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { articlesReducer } from './slices/articlesSlice';
import { filterReducer } from './slices/filterSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, articlesReducer);

export const reducer = {
  articles: persistedReducer,
  filter: filterReducer,
};
