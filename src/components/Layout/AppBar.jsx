import { useSelector } from 'react-redux';

import { Navigation } from 'components/Layout/Navigation';
import { UserMenu } from './UserMenu';
import { AuthNav } from './AuthNav';

import { Header, HeaderContainer, HeaderBody } from './Layout.styled';

import { isLoggedInSelector } from '../../redux/selectors';

export const AppBar = () => {
  const isLoggedIn = useSelector(isLoggedInSelector);

  return (
    <Header>
      <HeaderBody>
        <HeaderContainer>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </HeaderContainer>
      </HeaderBody>
    </Header>
  );
};
