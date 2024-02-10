import { useDispatch } from 'react-redux';

import { logoutUserAction } from '../../redux/slices/authSlice';

import { UserMenuContainer } from './Layout.styled';
import { NeonButton } from './Layout.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <UserMenuContainer>
      <NeonButton type="button" onClick={() => dispatch(logoutUserAction())}>
        Log Out
      </NeonButton>
    </UserMenuContainer>
  );
};
