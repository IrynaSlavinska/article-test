import {
  List,
  Item,
  ImgCont,
  ItemImg,
  ItemTitle,
  ItemSubtitle,
  ItemText,
} from './ArticleGallery.styled';

import defaultImage from '../../default.png';

export const ArticlesGallery = ({ articles }) => {
  return (
    <List>
      {articles.map(({ author, title, description, urlToImage }) => {
        return (
          <Item key={title}>
            <ImgCont>
              <ItemImg
                src={urlToImage ? urlToImage : defaultImage}
                alt={title}
                width="300"
              />
            </ImgCont>
            <ItemTitle>{title}</ItemTitle>
            <ItemSubtitle>Author: {author}</ItemSubtitle>
            <ItemText>{description}</ItemText>
          </Item>
        );
      })}
    </List>
  );
};
