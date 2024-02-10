import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LayoutContainer = styled.div`
  margin: 0 auto;
  max-width: 575.8px;
  padding: 0 20px;

  @media (min-width: 576px) {
    max-width: 991.8px;
  }

  @media (min-width: 992px) {
    max-width: 1440px;
  }
`;

export const Header = styled.header`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  background-color: rgb(14, 14, 58);
`;

export const NavigationMenu = styled.ul`
  display: flex;
  gap: 20px;
`;
export const NavItem = styled.li``;

export const StyledLink = styled(NavLink)`
  font-size: 20px;
  color: #0bf4f3;
  background-color: transparent;
  border: 1px solid #0bf4f3;
  box-shadow: 0 0 5px #0bf4f3, 0 0 5px #0bf4f3 inset;
  padding: 8px;
  border-radius: 4px;

  &.active {
    color: rgb(14, 14, 58);
    background-color: #0bf4f3;
  }
`;

export const NeonButton = styled.button`
  padding: 14px 20px;
  font-size: 22px
  margin: 10px 0;
  color: #0bf4f3;
  border: 1px solid #0bf4f3;
  box-shadow:  0 0 5px #0bf4f3,  0 0 5px #0bf4f3 inset;
  background: transparent;
  transition:400ms ease all;
  &: hover {
    color: rgb(14, 14, 58);
    background-color: #0bf4f3
  }
`;

export const UserMenuContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const NeonShowMore = styled.button`
  padding: 14px 20px;
  font-size: 22px
  color: #0bf4f3;
  margin: 0 auto;
  border: 1px solid #0bf4f3;
  box-shadow:  0 0 5px rgb(14, 14, 58),  0 0 5px rgb(14, 14, 58) inset;
  background: rgb(14, 14, 58);
  transition:400ms ease all;
  &: hover {
    color: rgb(14, 14, 58);
    background-color: transparent;
  }
`;
