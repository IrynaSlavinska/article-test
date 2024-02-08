import { getArticles } from '../services/api';

export const MainPage = () => {
  return <button type="button" onClick={() => getArticles(2)}></button>;
};
