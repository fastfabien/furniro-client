import { Link } from "react-router-dom";
import styled from "styled-components";

export const P = styled.p`
  font-size: 1.25vw;
  font-weight: 500;
  color: ${(p) => p.theme.black};
  line-height: 1.66666666667vw;
`;

export const H1 = styled.h1`
  font-size: 3.61111111111vw;
  font-weight: bold;
  line-height: 4.51388888889vw;
  color: ${(p) => p.theme.gold};
  text-transform: capitalize;
`;

export const H2 = styled.h2`
  font-size: 2.08333333333vw;
  font-weight: bold;
  line-height: 120%;
  color: ${(p) => p.theme.black};
  text-transform: capitalize;
`;

export const H3 = styled(H2)`
  font-size: 1.6666666666666667vw;
`;

export const TextBold = styled.span`
  font-size: 1.25vw;
  font-weight: bold;
  color: ${(p) => p.theme.black};
  line-height: 1.25vw;
`;

export const TextLight = styled.span`
  font-size: 1.04166666667vw;
  font-weight: 100;
  line-height: auto;
  color: ${(p) => p.theme.blackLight};
`;

export const SpacingText = styled.p`
  font-size: 1.11111111111vw;
  font-weight: 500;
  letter-spacing: 3px;
  line-height: auto;
  color: ${(p) => p.theme.black};
`;

export const LinkText = styled(Link)`
  font-size: 1.11111111111vw;
  font-weight: 500;
  line-height: auto;
  color: ${(p) => p.theme.black};

  &:hover {
    opacity: 0.8;
  }
`;

export const NoLinkText = styled.span`
  font-size: 1.11111111111vw;
  font-weight: 500;
  line-height: auto;
  color: ${(p) => p.theme.black};
  cursor: pointer;
  font-size: 1.5vw;

  &:hover {
    opacity: 0.8;
  }
`;

export const NavText = styled.span`
  font-size: 1.5vw;
  font-weight: 500;
  line-height: auto;
  color: ${(p) => p.theme.black};
  cursor: pointer;

  & svg {
    font-size: inherit;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const RoundedUser = styled.div`
  background-color: ${(p) => p.theme.black};
  padding: 0.25vw 0.8vw;
  border-radius: 50%;
  color: ${(p) => p.theme.white};
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
`;
