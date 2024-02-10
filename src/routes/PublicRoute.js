import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const PublicRoute = ({
  component: Component,
  redirectTo = '/articles',
}) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
