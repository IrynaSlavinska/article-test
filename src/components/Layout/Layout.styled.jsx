import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Main = styled.main`
  margin: 0 auto;
  max-width: 575.8px;
  padding: 100px 20px;

  @media (min-width: 576px) {
    max-width: 991.8px;
  }

  @media (min-width: 992px) {
    max-width: 1440px;
  }
`;

export const Header = styled.header`
  margin-bottom: 10px;
  padding: 10px 30px;

  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 50;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(14, 14, 58);
  }
`;

export const HeaderBody = styled.div`
  position: relative;
  z-index: 2;
`;

export const HeaderContainer = styled.div`
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  max-width: 300px;

  @media (min-width: 576px) {
    max-width: 500px;
  }
  @media (min-width: 720px) {
    max-width: 600px;
  }
  @media (min-width: 992px) {
    max-width: 900px;
  }
`;

export const NavigationMenu = styled.ul`
  display: flex;
  gap: 20px;

  @media (max-width: 576px) {
    gap: 10px;
  }
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

  &.active,
  &:hover {
    color: rgb(14, 14, 58);
    background-color: #0bf4f3;
  }

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const NeonButton = styled.button`
 padding: 8px;
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
    @media (max-width: 576px) {
    font-size: 14px;
  }
  ${({ isActive }) =>
    isActive &&
    `
background-color: #0bf4f3;
color: rgb(14, 14, 58);
  `}
`;

export const UserMenuContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const NeonShowMore = styled.button`
  padding: 10px;
  font-size: 22px;
  color: #0bf4f3;
  border: 1px solid #0bf4f3;
  box-shadow: 0 0 5px rgb(14, 14, 58), 0 0 5px rgb(14, 14, 58) inset;
  background: rgb(14, 14, 58);
  transition: 400ms ease all;
  &: hover {
    color: rgb(14, 14, 58);
    background-color: transparent;
  }
`;
