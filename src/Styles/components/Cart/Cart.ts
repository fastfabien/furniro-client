import styled from "styled-components";
import { H2 } from "../../Typography";
import { CartButtonContainer } from "../Button";

export const CartContainer = styled.div`
  background-color: rgba(${(p) => p.theme.dimgrayRgba}, 0.4);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  z-index: 20;
  overscroll-behavior: contain;
`;

export const CartContent = styled.div`
  padding: 1.9444444444444444vw;
  width: 28.958333333333332vw;
  background-color: ${(p) => p.theme.white};
  height: 47.80555555555556vw;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const CartItemHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.8055555555555556vw;

  & svg {
    color: rgba(${(p) => p.theme.dimgrayRgba}, 0.4);
    font-size: 1.5vw;
    border: 1px solid rgba(${(p) => p.theme.dimgrayRgba}, 0.4);
    padding: 2px 4px;
    border-radius: 50%;
    cursor: pointer;
    transform: scale(0.9);
    transition: transform 0.5s ease;

    &:hover {
      border: 1px solid rgba(${(p) => p.theme.dimgrayRgba}, 1);
      color: rgba(${(p) => p.theme.dimgrayRgba}, 1);
      transform: scale(1.2);
      transition: transform 0.5s ease;
    }
  }
`;

export const CartItemsContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.9166666666666665vw 0;
  gap: 1.3888888888888888vw;
  height: 68%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const CartItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CartItemProduct = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-right: 4.166666666666667vw;

  & p:first-child {
    text-transform: capitalize;
  }

  & + svg {
    color: ${(p) => p.theme.white};
    font-size: 1.5vw;
    background-color: rgba(${(p) => p.theme.dimgrayRgba}, 0.4);
    padding: 2px 4px;
    border-radius: 50%;
    cursor: pointer;
    transform: scale(0.9);
    transition: transform 0.5s ease;

    &:hover {
      background-color: rgba(${(p) => p.theme.dimgrayRgba}, 1);
      transform: scale(1.2);
      transition: transform 0.5s ease;
    }
  }

  & p:first-child {
    font-weight: 400;
    font-size: 16px;
  }
  & p:last-child {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 15px;
  }
`;

export const CartItemImage = styled.img`
  width: 7.5vw;
  height: 7.291666666666667vw;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 2.2222222222222223vw;
`;

export const Quantity = styled.span`
  font-weight: 200;
  font-size: 16px;
`;

export const Price = styled.div`
  color: ${(p) => p.theme.gold};
  font-weight: 500;
  font-size: 12px;
`;

export const Total = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 6.944444444444445vw;
  align-items: center;
  margin-bottom: 1.597222222222222vw;

  & p:first-child {
    width: unset;
  }

  & ${Price} {
    font-weight: 700;
    font-size: 16px;
  }
`;

export const CartItemFooter = styled.div`
  padding: 1.8055555555555556vw 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 14px;
`;

export const CartItemFooterContainer = styled.div`
  position: absolute;
  bottom: 0;
`;

export const CartPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.0833333333333335vw;
`;

export const CartTotalContainer = styled.div`
  padding: 1.8vw 5.208333333333333vw 5.555555555555555vw 5.208333333333333vw;
  background-color: ${(p) => p.theme.lightPeach};
  width: 27.291666666666668vw;
  height: 27.291666666666668vw;

  & ${H2} {
    margin-bottom: 4.166666666666667vw;
    text-align: center;
  }

  & ${CartButtonContainer} {
    border-radius: 1.0416666666666667vw;
    padding: 14px 4.166666666666667vw;
    font-size: 1.3888888888888888vw;
    margin-top: 3.8194444444444446vw;
    display: block;
  }
`;

export const CartTotalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.0833333333333335vw;

  & p {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 1.1111111111111112vw;
  }

  & p:first-child span {
    font-size: 1.1111111111111112vw;
  }

  & p:last-child span {
    color: ${(p) => p.theme.gold};
  }
`;

export const CartTableContainer = styled.table`
  width: 56.736111111111114vw;
  border-collapse: separate;
  border-spacing: 0;
`;

export const CartTableTrHead = styled.tr`
  background-color: ${(p) => p.theme.lightPeach};
  height: 3.8194444444444446vw;
  border-collapse: collapse;

  & th,
  & td {
    padding: 0;
    text-transform: capitalize;
  }
`;

export const CartTableRowContainer = styled.tr`
  & td {
    text-align: center;
    width: fit-content;
    padding: 0;
    text-transform: capitalize;

    &:first-child {
      display: block;
      margin-top: 20px;
    }

    &:last-child {
      width: 4.4305555555555554vw;
    }

    & svg {
      color: ${(p) => p.theme.gold};
    }

    & img {
      width: 7.291666666666667vw;
      height: 7.291666666666667vw;
      object-fit: cover;
      border-radius: 10px;
    }
  }
`;

export const CartTableQuantity = styled.div`
  border-radius: 5px;
  border: 1px solid ${(p) => p.theme.blackLight};
  font-size: 1.1111111111111112vw;
  padding: 10px auto;
  width: 2.2222222222222223vw;
  height: 2.2222222222222223vw;
  margin: 0 auto;
  text-align: center;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
`;
