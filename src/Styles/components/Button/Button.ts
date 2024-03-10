import styled, { css } from "styled-components";
import { ButtonProps } from "../../../common";
import { Link } from "react-router-dom";

const button = css`
  cursor: pointer;
  font-size: 1.11111111111vw;
  font-weight: bold;
  text-transform: uppercase;
  line-height: auto;
  transition: background-color 0.5s ease, color 0.5s ease;
  width: fit-content;
  padding: 1.33611111111vw 5vw;

  &:hover {
    transition: background-color 0.5s ease, color 0.5s ease;
  }
`;

export const Btn = styled.button<ButtonProps>`
  border: 1px solid ${(p) => (p.primary ? "transparent" : p.theme.gold)};
  background-color: ${(p) => (p.primary ? p.theme.gold : p.theme.white)};
  color: ${(p) => (p.primary ? p.theme.white : p.theme.gold)};

  ${button}

  &:hover {
    background-color: ${(p) => (p.primary ? p.theme.white : p.theme.gold)};
    color: ${(p) => (p.primary ? p.theme.gold : p.theme.white)};
    border: 1px solid ${(p) => p.theme.gold};
  }
`;

export const BtnLink = styled(Link)<ButtonProps>`
  border: 1px solid ${(p) => (p.primary ? "transparent" : p.theme.gold)};
  background-color: ${(p) => (p.primary ? p.theme.gold : p.theme.white)};
  color: ${(p) => (p.primary ? p.theme.white : p.theme.gold)};

  ${button}

  display: inline-block;

  &:hover {
    background-color: ${(p) => (p.primary ? p.theme.white : p.theme.gold)};
    color: ${(p) => (p.primary ? p.theme.gold : p.theme.white)};
    border: 1px solid ${(p) => p.theme.gold};
  }
`;

export const SubscribeButton = styled.input`
  text-transform: uppercase;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${(p) => p.theme.black};
  font-size: 14px;
  font-weight: 600;
  padding-bottom: 5px;
  border-bottom: 2px solid ${(p) => p.theme.black};
  margin-bottom: 0 !important;
`;

export const InputSubmit = styled.input`
  ${button}
  border: 1px solid ${(p) => p.theme.gold};
  background-color: ${(p) => p.theme.gold};
  color: ${(p) => p.theme.white};
  // margin-top: 3.4722222222222223vw;

  &:hover {
    background-color: ${(p) => p.theme.white};
    color: ${(p) => p.theme.gold};
    border: 1px solid ${(p) => p.theme.gold};
  }
`;
