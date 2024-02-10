import { useEffect, useState } from 'react';
import { getArticles } from 'services/api';
import { Title } from './PageStyles.styled';

export const MainPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles()
      .then(result => {
        setArticles(result);
        console.log(articles);
      })
      .catch(err => console.log(err));
  }, [articles]);

  return <Title>Main Page</Title>;
};
