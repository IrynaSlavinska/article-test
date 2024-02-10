import { useSelector } from 'react-redux';

import { isLoggedInSelector } from '../../redux/selectors';

import { NavigationMenu, NavItem, StyledLink } from './Layout.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(isLoggedInSelector);

  return (
    <NavigationMenu>
      <NavItem>
        <StyledLink to="/">Main</StyledLink>
      </NavItem>

      {isLoggedIn && (
        <>
          <NavItem>
            <StyledLink to="articles">My articles</StyledLink>
          </NavItem>
        </>
      )}
    </NavigationMenu>
  );
};
