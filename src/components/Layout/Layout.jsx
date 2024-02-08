import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { AppBar } from 'components/AppBar/AppBar';

import { Container } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
