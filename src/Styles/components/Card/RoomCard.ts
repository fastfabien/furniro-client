import styled from "styled-components";

// "28.0555555556vw" : "25.8333333333vw"

export const RoomCardContainer = styled.div<{
  img: string;
  isactive: boolean;
}>`
  width: ${(p) => (p.isactive ? "100%" : "100%")};
  height: ${(p) => (p.isactive ? "40.4166666667vw" : "33.75vw")};
  position: relative;
  padding-left: 1.66666666667vw;
  background-image: url(${(p) => p.img});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  transition: width 0.2s ease-out, height 0.2s ease;
`;

export const RoomCardContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0;
  justify-content: flex-start;
  align-items: flex-end;
  position: absolute;
  bottom: 1.66666666667vw;
  left: 1.66666666667vw;
  width: 80%;
`;

export const RoomCardLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: rgba(${(p) => p.theme.whiteRgba}, 0.7);
  padding: 2.22222222222vw 2.22222222222vw;
  padding-right: 1.18055555556vw;
  width: fit-content;

  & + a {
    padding: 0.83333333333vw;
    width: fit-content;
    font-size: 1.2vw;
  }

  & p {
    font-size: 1.11111111111vw;
  }

  & span {
    font-size: 1.94444444444vw;
    font-weight: 600;
    line-height: calc(1.94444444444vw * 1.618);
  }
`;
