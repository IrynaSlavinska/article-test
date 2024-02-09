import { Routes, Route } from 'react-router-dom';

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
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="articles" element={<ArticlesPage />} />

        <Route path="*" element={<NotFoundPage to={'/'} />}></Route>
      </Route>
    </Routes>
  );
};
