import { Routes, Route } from 'react-router-dom';

import { MainPage } from 'pages/MainPage';
import { AuthRootComponent } from 'components/AuthRoot/AuthRootComponent';
import { ArticlesPage } from 'pages/ArticlesPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/register" element={<AuthRootComponent />} />
      <Route path="/login" element={<AuthRootComponent />} />
      <Route path="/articles" element={<ArticlesPage />} />

      <Route path="*" element={<div>NotFoundPage</div>}></Route>

      {/* <Route path="*" element={<NotFound to={'/'} />}></Route> */}
    </Routes>
  );
};
