import {
  List,
  Item,
  ItemImg,
  ItemTitle,
  ItemSubtitle,
  ItemText,
} from './ArticleGallery.styled';

export const ArticlesGallery = ({ articles }) => {
  return (
    <List>
      {articles.map(({ author, title, description, urlToImage }) => {
        return (
          <Item key={title}>
            <ItemImg src={urlToImage} alt={title} width="300" />
            <ItemTitle>{title}</ItemTitle>
            <ItemSubtitle>Author: {author}</ItemSubtitle>
            <ItemText>{description}</ItemText>
          </Item>
        );
      })}
    </List>
  );
};
