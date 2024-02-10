import axios from 'axios';

const BASE_URL = 'https://newsapi.org/';
// const API_KEY = '6c0d552261f749939481e68f4a38f51a';
const API_KEY = 'cc313555217c42b3891ae14adb4ccbb9';
// axios.defaults.headers.common['x-api-key'] = API_KEY;
axios.defaults.headers.common['Authorization'] = `Bearer ${API_KEY}`;

export const getArticles = async (currentPage = 1, pageSize = 10) => {
  const result = await axios.get(
    `${BASE_URL}v2/top-headlines?sources=bbc-news&pageSize=${pageSize}&page=${currentPage}`
  );
  return result;
};
