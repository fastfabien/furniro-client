import styled from "styled-components";

interface RateContentProps {
  isactive: boolean;
}

export const Rating = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 18px;
  color: ${(p) => p.theme.black};
  margin-top: 15px;

  & .grip-lines {
    font-size: 1.6vw;
    color: ${(p) => p.theme.lightGray};
    & + span {
      font-size: 13px !important;
      text-transform: capitalize;
    }
  }
`;

export const RateContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const RateContent = styled.div<RateContentProps>`
  color: ${(p) => (p.isactive ? p.theme.gold : p.theme.lightPeach)};
  font-size: 1.5vw;

  & svg {
    fill: ${(p) => (p.isactive ? p.theme.gold : p.theme.lightPeach)};
  }
`;
