import { useEffect, useState } from 'react';
import { getArticles } from 'services/api';
import { ArticlesGallery } from 'components/ArticlesMain/ArticlesGallery';
import { NeonShowMore } from 'components/Layout/Layout.styled';
import { Loader } from 'components/Loader/Loader';

export const MainPage = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticles(page)
      .then(result => {
        setIsLoading(false);
        setArticles(result.data.articles);
      })
      .catch(err => console.log(err));
  }, [page]);

  const handleClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      {isLoading && <Loader />}
      {articles.length > 0 && (
        <>
          <ArticlesGallery articles={articles} />
          <NeonShowMore type="button" onClick={() => handleClick()}>
            Show more
          </NeonShowMore>
        </>
      )}
    </>
  );
};
