import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/image/Logo.svg";

export const NavbarContainer = styled.div`
  padding: 2.08333333333vw 6.94444444444vw 2.08333333333vw 3.81944444444vw;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${(p) => p.theme.white};
  z-index: 20;
`;

export const NavbarLogo = styled(Link)`
  display: block;
  height: 2.84722222222vw;
  width: 12.8472222222vw;
  background-image: url(${Logo});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 18.4722222222vw;
`;

export const NavbarLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 5.20833333333vw;
  margin-right: 10.9722222222vw;
`;

export const NavbarAction = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3.125vw;

  & a {
    font-size: 1.5vw;
  }
`;
