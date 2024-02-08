import { NavLink } from 'react-router-dom';

export const AppBar = () => {
  return (
    <header>
      <ul>
        <li>
          <NavLink to="/">Main</NavLink>
        </li>
        <li>
          <NavLink to="register">Register</NavLink>
        </li>
        <li>
          <NavLink to="login">Login</NavLink>
        </li>
        <li>
          <NavLink to="articles">Articles</NavLink>
        </li>
      </ul>
    </header>
  );
};
