import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { LayoutContainer, Header, Navigation } from './Layout.styled';

export const Layout = () => {
  return (
    <LayoutContainer>
      <Header>
        <Navigation>
          <li>
            <NavLink to="/">Main</NavLink>
          </li>
          <li>
            <NavLink to="/articles">Articles</NavLink>
          </li>
          <li>
            <NavLink to="login">Login</NavLink>
          </li>
          <li>
            <NavLink to="register">Register</NavLink>
          </li>
        </Navigation>
      </Header>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </LayoutContainer>
  );
};
