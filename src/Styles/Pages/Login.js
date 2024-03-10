import styled from "styled-components";
import { H2, RoundedUser } from "../Typography";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 31.458333333333332vw;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(${(p) => p.theme.dimgrayRgba}, 0.5);
  z-index: 20;

  ${H2} {
    font-size: 2.5vw;
    margin-bottom: 2.5vw;
  }
`;

export const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  & ${RoundedUser} {
    background-color: ${(p) => p.theme.gold};
    position: absolute;
    top: -3vw;
    right: -2vw;
  }

  & ${H2} {
    text-transform: uppercase;
  }

  & form {
    width: 100%;
  }
`;

export const LoginCardContent = styled.div`
  padding: 2vw 5vw;
  background-color: ${(p) => p.theme.white};
  border-radius: 10px;
  width: 60vw;
  height: 90vh;
  z-index: 20;
  display: flex;
  flex-direction: column;
  align-item: center;
  justify-content: center;
`;

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: row;
  ${"" /* flex-wrap: wrap; */}
  gap: 0.5vw;
`;

export const RegisterContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const LogoutText = styled.span`
  font-size: 1.5vw;
  cursor: pointer;
`;
