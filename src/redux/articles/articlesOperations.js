import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://newsapi.org/';
// const API_KEY = '6c0d552261f749939481e68f4a38f51a';
const API_KEY = 'cc313555217c42b3891ae14adb4ccbb9';

axios.defaults.headers.common['x-api-key'] = API_KEY;

export const getArticlesAction = createAsyncThunk(
  'articlesDB/getArticlesAction',
  async (page = 1, thunkAPI) => {
    try {
      const response = await axios.get(
        `${BASE_URL}v2/top-headlines?country=ua&pageSize=10&page=${page}`
      );
      // console.log(response.data.totalResults);

      return response.data;
      // return response.data.articles;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
