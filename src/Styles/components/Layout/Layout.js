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

export const LayoutFooter = styled.div`
  padding: 6.944444444444445vw 3.6805555555555554vw;
  background-color: ${(p) => p.theme.lightPeach};
  margin-top: 5.902777777777778vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 3.8194444444444446vw;
`;

export const LayoutFooterContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;

  & svg {
    width: 4.166666666666667vw;
    height: 4.5vw;
  }

  & div:last-child {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
