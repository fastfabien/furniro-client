import styled from "styled-components";

export const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 1.25vw;
  margin-top: 2.2222222222222223vw;
`;

export const ActionInput = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid ${(p) => p.theme.black};
  border-radius: 10px;
  width: 8.541666666666666vw;
  padding: 1.3888888888888888vw 1.0416666666666667vw;
  gap: 1.4305555555555554vw;
  align-items: center;

  & svg {
    cursor: pointer;
    -webkit-user-select: none; /* Chrome, Safari, Opera */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE 10+ */
    user-select: none;
  }
`;
