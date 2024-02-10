import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from '../routes/PrivateRoute';
import { PublicRoute } from '../routes/PublicRoute';

import {
  MainPage,
  LoginPage,
  RegisterPage,
  ArticlesPage,
  NotFoundPage,
} from 'pages';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />

        <Route
          path="register"
          element={<PublicRoute component={<RegisterPage />} />}
        />

        <Route
          path="login"
          element={<PublicRoute component={<LoginPage />} />}
        />

        <Route
          path="articles"
          element={
            <PrivateRoute redirectTo="/login" component={<ArticlesPage />} />
          }
        />

        <Route path="*" element={<NotFoundPage to={'/'} />}></Route>
      </Route>
    </Routes>
  );
};
