import { useDispatch, useSelector } from 'react-redux';
import { getArticlesSelector, getFilterSelector } from '../../redux/selectors';
import {
  removeArticleAction,
  replaceArticleAction,
} from '../../redux/slices/articlesSlice';
import { List, Item, Div, ButtonDiv, Text } from './ArticleComponents.styled';
import { NeonButton } from 'components/Layout/Layout.styled';

export const Articles = () => {
  const filter = useSelector(getFilterSelector);
  const articles = useSelector(getArticlesSelector);
  const dispatch = useDispatch();
  const removeArticle = id => dispatch(removeArticleAction(id));

  const getFiltredArticles = () => {
    if (filter.filter === '') {
      return;
    }
    const normilezedFilter = filter.toLowerCase().trim();
    const visibleArticles = articles.filter(art => {
      const filtred =
        art.title.toLowerCase().includes(normilezedFilter) ||
        art.description.toLowerCase().includes(normilezedFilter);
      return filtred;
    });

    return visibleArticles;
  };

  const visibleArticles = getFiltredArticles();

  const pinArticle = articleId => {
    const pinnedArticle = articles.find(article => article.id === articleId);
    const filteredArticles = articles.filter(
      article => article.id !== articleId
    );
    const newList = [pinnedArticle, ...filteredArticles];
    dispatch(replaceArticleAction(newList));
    return newList;
  };

  return (
    <List>
      {visibleArticles.map(({ id, title, description }) => (
        <Item key={id}>
          <Div>
            <Text>{title}</Text>
            <Text>{description}</Text>
          </Div>
          <ButtonDiv>
            <NeonButton
              type="button"
              onClick={() => {
                pinArticle(id);
              }}
            >
              Pin
            </NeonButton>
            <NeonButton type="button" onClick={() => removeArticle(id)}>
              Remove
            </NeonButton>
          </ButtonDiv>
        </Item>
      ))}
    </List>
  );
};
