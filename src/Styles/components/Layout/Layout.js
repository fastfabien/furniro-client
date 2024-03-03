import styled from "styled-components";
import shop from "../../../assets/image/shop.png";

export const LayoutContainer = styled.div`
  height: 21.944444444444443vw;
  width: auto;
  background-image: url(${shop});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & + div {
    padding-bottom: ;
  }
`;

export const LayoutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0;

  & h1 {
    color: ${(p) => p.theme.black};
    text-transform: capitalize;
    font-size: 3.3333333333333335vw;
    font-weight: 600;
  }
`;

export const HouseLogo = styled.img`
  width: 5.347222222222222vw;
  height: 5.347222222222222vw;
`;
