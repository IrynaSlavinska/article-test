import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { articlesReducer } from './articlesSlice';
import { filterReducer } from './filterSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, articlesReducer);

export const reducer = {
  articles: persistedReducer,
  filter: filterReducer,
};
