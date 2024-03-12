import styled from "styled-components";
import { P } from "../../Typography";
import { Text } from "../../Pages";

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

export const Hr = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(p) => p.theme.pureGray};
`;

export const More = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8333333333333334vw;
  margin-top: 4.166666666666667vw;
  margin-bottom: 4.166666666666667vw;
`;

export const MoreContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.1111111111111112vw;

  & span {
    font-size: 1.1111111111111112vw !important;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 4.513888888888889vw;
`;

export const DescriptionHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  //   gap: 1.611111111111111vw;
  margin-bottom: 2.5694444444444446vw;

  & ${Text} {
    color: ${(p) => p.theme.lightGray};
    font-size: 1.6666666666666667vw;
  }
`;

export const DescriptionContent = styled.div`
  & ${P} {
    font-size: 1.1111111111111112vw;
    line-height: 1.8em;
    color: ${(p) => p.theme.lightGray};
  }
`;

export const DescriptionImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.0833333333333335vw;
  margin-top: 2.5vw;
`;

export const DescriptionImage = styled.img`
  width: 50%;
  height: 24.166666666666668vw;
  object-fit: cover;
  border-radius: 10px;
`;
