import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 575.8px;
  padding: 0 20px;

  @media (min-width: 576px) {
    max-width: 991.8px;
    padding: 0 32px;
    background-color: red;
  }

  @media (min-width: 992px) {
    max-width: 1440px;
    background-color: green;
  }
`;
