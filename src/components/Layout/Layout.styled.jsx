import styled from '@emotion/styled';

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
`;

export const Navigation = styled.ul`
  display: flex;
  justify-content: space-between;
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
