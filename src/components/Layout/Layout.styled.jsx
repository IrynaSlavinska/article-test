import styled from '@emotion/styled';

export const LayoutContainer = styled.div`
  margin: 0 auto;
  max-width: 575.8px;
  padding: 0 20px;
  background-color: rgb(69, 185, 147);

  @media (min-width: 576px) {
    max-width: 991.8px;
    background-color: rgb(58, 81, 184);
  }

  @media (min-width: 992px) {
    max-width: 1440px;
    background-color: rgb(180, 66, 66);
  }
`;

export const Header = styled.header`
  margin-bottom: 10px;
`;

export const Navigation = styled.ul`
  display: flex;
  justify-content: space-between;
`;
