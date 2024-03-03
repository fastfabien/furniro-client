import styled from "styled-components";

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
