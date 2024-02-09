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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  background-color: rgb(236, 233, 180);
  padding: 10px;
  border-radius: 4px;
  margin: 10px auto;
  max-width: 90%;

  @media (min-width: 576px) {
    margin-bottom: 14px;
  }
`;

export const Text = styled.p`
  text-align: center;
  font-size: 20px;
`;
export const Label = styled.label`
  font-size: 18px;
  max-width: 100%;

  @media (min-width: 576px) {
    display: flex;
    align-items: center;
  }
`;

export const Input = styled.input`
  margin-left: 6px;
  padding: 8px;
  border-radius: 8px;
  font-size: 20px;
  width: 350px;
  outline: transparent;
  border: none;
  margin-top: 4px;
  max-width: 90%;
  width: 450px;

  @media (min-width: 576px) {
    margin: 0 auto;
    margin-top: 8px;
  }
`;

export const Button = styled.button`
  padding: 8px 16px;
  font-size: 18px;
  margin: 10px 0;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  gap: 10px;

  @media (min-width: 576px) {
    flex-wrap: wrap;
    flex-direction: row;
    gap: 14px;
    margin-top: 14px;
    justify-content: center;
    max-width: 1000px;
    margin: 14px auto;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  background-color: rgb(236, 233, 180);
  padding: 10px;
  border-radius: 4px;

  @media (min-width: 576px) {
    width: 300px;
  }

  @media (min-width: 992px) {
    width: 250px;
  }
`;

export const Div = styled.div``;
export const ButtonDiv = styled.div`
  display: flex;
  gap: 10px;
`;
