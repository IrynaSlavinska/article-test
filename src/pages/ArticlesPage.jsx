import { Filter } from 'components/ArticlesComponents/Filter';
import { Articles } from 'components/ArticlesComponents/Articles';
import { ArticleForm } from 'components/ArticlesComponents/ArticleForm';
import { Title } from './PageStyles.styled';

export const ArticlesPage = () => {
  return (
    <>
      <Title>My Articles</Title>
      <ArticleForm />
      <Filter />
      <Articles />
    </>
  );
};
