import { useSelector } from 'react-redux';
import { isLoggedInSelector, userSelector } from '../redux/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(isLoggedInSelector);
  const user = useSelector(userSelector);

  return {
    isLoggedIn,
    user,
  };
};
