import styled from '@emotion/styled';

export const SpanLoader = styled.span`
  display: block;
  width: 100px;
  width: 100px;
  margin: 100px auto;
  background: #fff;
  animation: wave 1s ease-in infinite;

  @keyframes wave {
    0% {
      box-shadow: 0 0 0 0px rgba(255, 255, 255, 1),
        0 0 0 20px rgba(255, 255, 255, 0.2), 0 0 0 40px rgba(255, 255, 255, 0.6),
        0 0 0 60px rgba(255, 255, 255, 0.4), 0 0 0 80px rgba(255, 255, 255, 0.2);
    }
    100% {
      box-shadow: 0 0 0 80px rgba(255, 255, 255, 0),
        0 0 0 60px rgba(255, 255, 255, 0.2), 0 0 0 40px rgba(255, 255, 255, 0.4),
        0 0 0 20px rgba(255, 255, 255, 0.6), 0 0 0 0px rgba(255, 255, 255, 1);
    }
  }
`;
