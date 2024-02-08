import { Routes, Route } from 'react-router-dom';

import { Layout } from './Layout/Layout';
import { MainPage } from '../pages/MainPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />

        <Route path="register" element={<div>RegisterPage</div>} />
        <Route path="login" element={<div>LoginPage</div>} />
        <Route path="/articles" element={<div>ArticlesPage</div>} />

        <Route path="*" element={<div>NotFoundPage</div>}></Route>
      </Route>
    </Routes>
  );
};
