import styled, { css } from "styled-components";
import { ButtonProps } from "../../../common";
import { Link } from "react-router-dom";

interface PaginationButtonProps {
  children: React.ReactNode;
  isactive: string;
}

interface AddToCardProps {
  type: string;
}

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
  border: 1px solid
    ${(p) => (p.primary === "true" ? "transparent" : p.theme.gold)};
  background-color: ${(p) =>
    p.primary === "true" ? p.theme.gold : p.theme.white};
  color: ${(p) => (p.primary === "true" ? p.theme.white : p.theme.gold)};

  ${button}

  &:hover {
    background-color: ${(p) =>
      p.primary === "true" ? p.theme.white : p.theme.gold};
    color: ${(p) => (p.primary === "true" ? p.theme.gold : p.theme.white)};
    border: 1px solid ${(p) => p.theme.gold};
  }
`;

export const BtnLink = styled(Link)<ButtonProps>`
  border: 1px solid
    ${(p) => (p.primary === "true" ? "transparent" : p.theme.gold)};
  background-color: ${(p) =>
    p.primary === "true" ? p.theme.gold : p.theme.white};
  color: ${(p) => (p.primary === "true" ? p.theme.white : p.theme.gold)};

  ${button}

  display: inline-block;

  &:hover {
    background-color: ${(p) =>
      p.primary === "true" ? p.theme.white : p.theme.gold};
    color: ${(p) => (p.primary === "true" ? p.theme.gold : p.theme.white)};
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

export const ButtonPagination = styled.button<PaginationButtonProps>`
  border: none;
  background-color: ${(p) =>
    p.isactive === "true" ? p.theme.gold : p.theme.lightPeach};
  color: ${(p) => (p.isactive === "true" ? p.theme.white : p.theme.black)};
  font-size: 1.3888888888888888vw;
  padding: 1.0416666666666667vw 1.8055555555555556vw;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.5s ease, color 0.5s ease;

  &:hover {
    background-color: ${(p) =>
      p.isactive ? p.theme.lightPeach : p.theme.gold};
    color: ${(p) => (p.isactive === "true" ? p.theme.black : p.theme.white)};
    transition: background 0.5s ease, color 0.5s ease;
  }
`;

export const InputNumber = styled.input`
  appearance: none;
  border: none;
  background-color: transparent;
  outline: none;
  -moz-appearance: textfield;
  max-width: 2vw;
  font-size: 1.1111111111111112vw;
  text-align: center;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const AddToCard = styled.button<AddToCardProps>`
  border: 1px solid ${(p) => p.theme.black};
  border-radius: 10px;
  outline: none;
  padding: 1.1805555555555556vw 3.3333333333333335vw;
  background-color: ${(p) => p.theme.white};
  cursor: pointer;
  font-size: 1.3888888888888888vw;
  width: fit-content;
  text-transform: capitalize;
`;
