import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Main } from './Layout.styled';
import { AppBar } from './AppBar';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};
