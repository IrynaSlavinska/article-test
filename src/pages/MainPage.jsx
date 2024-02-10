import { useEffect, useState } from 'react';
import { getArticles } from 'services/api';
import { ArticlesGallery } from 'components/ArticlesMain/ArticlesGallery';
import { NeonShowMore } from 'components/Layout/Layout.styled';

export const MainPage = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getArticles(page)
      .then(result => {
        setArticles(result.data.articles);
        setPage();
      })
      .catch(err => console.log(err));
  }, [page]);

  return (
    <>
      <ArticlesGallery articles={articles} />
      <NeonShowMore>Show more</NeonShowMore>
    </>
  );
};
