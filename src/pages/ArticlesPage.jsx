import { Filter } from 'components/ArticlesComponents/Filter';
import { Articles } from 'components/ArticlesComponents/Articles';
import { ArticleForm } from 'components/ArticlesComponents/ArtcleForm';

export const ArticlesPage = () => {
  return (
    <>
      <h1>My Articles</h1>
      <ArticleForm />
      <Filter />
      <Articles />
    </>
  );
};
