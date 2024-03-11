import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductCardContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 19.7916666667vw;

  & div:last-child {
    padding-left: 0.83333333333vw;
    padding-right: 0.83333333333vw;
    transform: translateX(-1000%);
  }

  &:hover div:last-child {
    transform: translateX(0);
  }
`;

export const ProductCardHeader = styled.img`
  height: 20.9027777778vw;
  width: 100%;
  object-fit: cover;
`;
export const ProductCardBody = styled.div`
  background-color: ${(p) => p.theme.gray};
  padding: 0.83333333333vw 1.04166666667vw;
  padding-bottom: 1.5625vw;
  display: flex;
  flex-direction: column;
  gap: 8px;

  & span:first-child {
    font-size: 1.25vw;
    text-transform: capitalize;
  }

  & span {
    font-size: 0.83333333333vw;
  }

  & span:last-child {
    font-size: 1.04166666667vw;
  }
`;

export const ProductCardAction = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(${(p) => p.theme.dimgrayRgba}, 0.6);

  & button {
    padding: 0.83333333333vw 2.61111111111vw;
    font-size: 1.11111111111vw;
  }
`;
