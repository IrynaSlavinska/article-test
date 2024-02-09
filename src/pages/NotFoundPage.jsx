import { NavLink } from 'react-router-dom';
import { Title } from './PageStyles.styled';

export const NotFoundPage = () => {
  return (
    <>
      <Title>Not Found Page</Title>
      <NavLink to="/">Home</NavLink>)
    </>
  );
};
