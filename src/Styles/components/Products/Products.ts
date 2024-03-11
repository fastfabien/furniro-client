import styled from "styled-components";

interface ImageProps {
  src: any;
  alt: string;
}

interface ThumbImagesProps {
  key: number;
  src: any;
  alt: string;
  isactive: boolean;
}

export const PaginationContainer = styled.div`

    display: flex;
    flex-direction: row:
    justify-content: center;
    gap: 2.638888888888889vw;
    margin-top: 4.861111111111111vw;

`;

export const ProductImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.0833333333333335vw;
  height: 34.72222222222222vw;
  align-items: stretch;
`;

export const AllImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  height: 34.72222222222222vw;
`;

export const ThumbsImages = styled.img<ThumbImagesProps>`
  width: 5.486111111111111vw;
  height: 5.555555555555555vw;
  object-fit: cover;
  border-radius: 10px;
  border: 5px solid ${(p) => (p.isactive ? p.theme.gold : "transparent")};
  cursor: pointer;
  transition: border 0.5s ease-out;
`;

export const CurrentImages: any = styled.div<ImageProps>`
  width: 29.375vw;
  border-radius: 10px;
  background-image: url(${(p) => p.src});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 34.72222222222222vw;
`;
