import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  background-color: rgb(14, 14, 58);
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 90%;

  @media (min-width: 576px) {
    margin-bottom: 14px;
  }

  @media (min-width: 576px) {
    width: 600px;
    padding: 30px;
  }
`;

export const Label = styled.label`
  font-size: 18px;
  max-width: 100%;
  color: #fff;

  @media (min-width: 576px) {
    width: 650px;
    display: flex;
    flex-direction: column;
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
  border: 1px solid rgb(14, 14, 58);
  margin-top: 4px;
  max-width: 90%;
  width: 450px;
  transition: 400ms ease all;

  &: hover {
    border: 1px solid #0bf4f3;
    box-shadow: 0 0 5px #0bf4f3, 0 0 5px #0bf4f3 inset;
  }

  @media (min-width: 576px) {
    margin: 0 auto;
    margin-top: 8px;
  }
`;

export const Text = styled.p`
  text-align: center;
  font-size: 20px;
  color: #fff;
`;
