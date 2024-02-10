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
      })
      .catch(err => console.log(err));
  }, [page]);

  const handleClick = () => {
    setPage(prevPage => prevPage + 1);
    console.log(page);
  };

  return (
    <>
      <ArticlesGallery articles={articles} />
      <NeonShowMore type="button" onClick={() => handleClick()}>
        Show more
      </NeonShowMore>
    </>
  );
};
