import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  gap: 10px;

  @media (min-width: 576px) {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    gap: 14px;
    margin-top: 14px;
    margin: 14px auto;
  }

  @media (min-width: 992px) {
    width: 1200px;
  }
`;

export const Item = styled.li`
  width: 300px;
  height: 380px;
  background-color: rgb(14, 14, 58);
  padding: 16px;
  border-radius: 4px;

  @media (min-width: 576px) {
    max-width: 300px;
  }

  @media (min-width: 992px) {
    min-width: 200px;
  }
`;

export const ItemImg = styled.img`
  margin-bottom: 8px;
`;

export const ItemTitle = styled.h2`
  color: #fff;
  font-size: 22px;
  margin-bottom: 8px;
`;

export const ItemSubtitle = styled.h3`
  color: #fff;
  font-size: 18px;
  margin-bottom: 8px;
`;

export const ItemText = styled.p`
  color: #fff;
`;
