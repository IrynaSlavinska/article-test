import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Main } from './Layout.styled';
import { AppBar } from './AppBar';

import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};
