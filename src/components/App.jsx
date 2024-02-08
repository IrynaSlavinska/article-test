import { Routes, Route } from 'react-router-dom';

import { MainPage } from 'pages/MainPage';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/articles" element={<div>ArticlesPage</div>} />

      <Route path="*" element={<div>NotFoundPage</div>}></Route>

      {/* <Route path="*" element={<NotFound to={'/'} />}></Route> */}
    </Routes>
  );
};
