import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectError,
  selectArticles,
  selectTotal,
} from '../redux/articles/articlesDBSelectors';
import { getArticlesAction } from '../redux/articles/articlesOperations';
import { ArticlesGallery } from 'components/ArticlesMain/ArticlesGallery';
import { NeonShowMore } from 'components/Layout/Layout.styled';
import { Loader } from 'components/Loader/Loader';
import { clearArticlesDB } from '../redux/articles/articlesDBSlice';

export const MainPage = () => {
  const articlesDB = useSelector(selectArticles);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const total = useSelector(selectTotal);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticlesAction(page));
  }, [dispatch, page]);

  useEffect(() => {
    return () => {
      dispatch(clearArticlesDB());
    };
  }, [dispatch]);

  const handleClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Something went wrong!. Try again later</p>}
      {articlesDB.length > 0 && (
        <>
          <ArticlesGallery articles={articlesDB} />
          {isLoading ? (
            <Loader />
          ) : (
            total >= articlesDB.length && (
              <NeonShowMore type="button" onClick={() => handleClick()}>
                Show more
              </NeonShowMore>
            )
          )}
        </>
      )}
    </>
  );
};
