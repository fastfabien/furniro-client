import styled from "styled-components";

export const BreadCrumbContainer = styled.nav``;

export const Ol = styled.ol`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  list-style-type: none;
`;

export const Li = styled.li`
  font-size: 1.1111111111111112vw;
  font-weight: 300;
  text-transform: capitalize;

  & a {
    font-weight: 800;
  }

  & + svg {
    font-size: 1.1111111111111112vw;
    font-weight: 800;
  }
`;
