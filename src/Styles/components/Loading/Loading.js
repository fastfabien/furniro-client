import styled, { keyframes } from "styled-components";

const rotate = keyframes`

  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg)
  }

`;

export const Loading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 2vw;
  height: 2vw;
  border: 1px dotted ${(p) => p.theme.gold};
  border-radius: 50%;
  background-color: ${(p) => p.theme.black};
`;

export const LoadingContainer = styled.div`
  padding: 5vw 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10vw;
  color: ${(p) => p.theme.gold};
  animation: ${rotate} 2s linear infinite;
`;
