import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 14px auto;
  gap: 10px;

  @media (min-width: 576px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media (min-width: 992px) {
    width: 1000px;
  }
`;

export const Item = styled.li`
  max-width: 300px;
  width: 100%;
  height: 550px;
  background-color: rgb(14, 14, 58);
  padding: 10px;
  border-radius: 8px;

  @media (min-width: 576px) {
    max-width: 210px;
  }
  @media (min-width: 720px) {
    max-width: 280px;
  }

  @media (min-width: 992px) {
    min-width: 280px;
  }
`;

export const ImgCont = styled.div`
  height: 210px;
`;
export const ItemImg = styled.img`
  margin-bottom: 8px;
  height: 100%;
  object-fit: cover;
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
