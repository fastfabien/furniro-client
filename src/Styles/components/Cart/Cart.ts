import styled from "styled-components";

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
