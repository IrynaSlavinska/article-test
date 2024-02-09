import { useDispatch, useSelector } from 'react-redux';
import { getArticlesSelector, getFilterSelector } from '../../redux/selectors';
import {
  removeArticleAction,
  replaceArticleAction,
} from '../../redux/slices/articlesSlice';
import {
  List,
  Item,
  Div,
  Button,
  ButtonDiv,
  Text,
} from './ArticleComponents.styled';

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

  // const pinArticle = id => {
  //   // console.log(id);
  //   // const index = articles.findIndex(art => art.id === id);
  //   // console.log(index);
  //   // const element = articles.splice(index, 1);
  //   // console.log(element);
  //   // console.log(articles);
  //   // articles.unshift(element);
  //   // return articles;

  // };

  const pinArticle = id => dispatch(replaceArticleAction(id));

  return (
    <List>
      {visibleArticles.map(({ id, title, description }) => (
        <Item key={id}>
          <Div>
            <Text>{title}</Text>
            <Text>{description}</Text>
          </Div>
          <ButtonDiv>
            <Button
              type="button"
              onClick={() => {
                pinArticle(id);
              }}
            >
              Pin
            </Button>
            <Button type="button" onClick={() => removeArticle(id)}>
              Remove
            </Button>
          </ButtonDiv>
        </Item>
      ))}
    </List>
  );
};
