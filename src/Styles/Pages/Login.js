import styled from "styled-components";
import { H2 } from "../Typography";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 31.458333333333332vw;

  ${H2} {
    font-size: 2.5vw;
    margin-bottom: 2.5vw;
  }
`;
