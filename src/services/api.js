import axios from 'axios';

const BASE_URL = 'https://newsapi.org/';
const API_KEY = '6c0d552261f749939481e68f4a38f51a';
axios.defaults.headers.common['x-api-key'] = API_KEY;

export const getArticles = async page => {
  const result = await axios.get(
    `${BASE_URL}v2/top-headlines?category=technology`
  );
  return result;
};
