import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { LayoutContainer } from './Layout.styled';
import { AppBar } from './AppBar';

export const Layout = () => {
  return (
    <LayoutContainer>
      <AppBar />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </LayoutContainer>
  );
};
