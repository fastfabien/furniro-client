import styled from "styled-components";
import { P } from "../../Typography";
import { Link } from "react-router-dom";

export const SearchContainer = styled.div`
  width: 100%;
  position: fixed;
  height: 100vh;
  background-color: rgba(${(p) => p.theme.dimgrayRgba}, 0.8);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(p) => p.theme.white};
  padding: 0 5vw;
  z-index: 20;
`;

export const SearchResult = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${(p) => p.theme.gold};
`;

export const SearchResultContent = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  padding: 10px 20px;

  &:hover {
    background-color: ${(p) => p.theme.white};

    & ${P} {
      color: ${(p) => p.theme.black};
    }
  }

  & img {
    width: 3vw;
    height: 3vw;
    object-fit: cover;
  }

  & ${P} {
    font-size: 1.5vw;
    font-weight: 800;
    text-transform: uppercase;
    color: ${(p) => p.theme.white};
  }
`;
