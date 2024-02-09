import { Routes, Route } from 'react-router-dom';

import { MainPage } from 'pages/MainPage';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/articles" element={<ArticlesPage />} />

      <Route path="*" element={<NotFoundPage to={'/'} />}></Route>
    </Routes>
  );
};
