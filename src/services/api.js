import axios from 'axios';

const BASE_URL = 'https://newsapi.org/';
const API_KEY = '6c0d552261f749939481e68f4a38f51a';
// axios.defaults.headers.common['x-api-key'] = API_KEY;
axios.defaults.headers.common['Authorization'] = `Bearer ${API_KEY}`;

export const getArticles = async (currentPage = 1, pageSize = 10) => {
  const result = await axios.get(
    `${BASE_URL}v2/top-headlines?sources=bbc-news&pageSize=${pageSize}&page=${currentPage}`
  );
  return result;
};

// const fetchArticles = ({ searchQuery = '', currentPage = 1, pageSize = 5 }) => {
//   return axios
//     .get(
//       `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=${pageSize}&page=${currentPage}`
//     )
//     .then(response => response.data.articles);
// };
