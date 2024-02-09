import { useDispatch, useSelector } from 'react-redux';
import { getArticlesSelector, getFilterSelector } from '../../redux/selectors';
import { removeArticleAction } from '../../redux/articlesSlice';

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

  const pinArticle = id => {
    // console.log(id);
    const index = articles.findIndex(art => art.id === id);
    // console.log(index);
    const element = articles.splice(index, 1);
    console.log(element);
    console.log(articles);
    // articles.unshift(element);
    // return articles;
  };

  return (
    <ul>
      {visibleArticles.map(({ id, title, description }) => (
        <li key={id}>
          <div>
            <p>{title}</p>
            <p>{description}</p>
          </div>
          <div>
            <button
              type="button"
              onClick={() => {
                pinArticle(id);
              }}
            >
              Pin
            </button>
            <button type="button" onClick={() => removeArticle(id)}>
              Remove
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
