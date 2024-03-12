import React, { useEffect, useState } from "react";
import {
  DescriptionContainer,
  DescriptionContent,
  DescriptionHeader,
  DescriptionImage,
  DescriptionImageContainer,
} from "../../Styles/components/Action";
import {
  DescriptionSize,
  DescriptionText,
  P,
  Text,
  TextBold,
  TextSize,
  Wrapper,
} from "../../Styles";
import { getBase64 } from "../../common";

interface DescriptionProps {
  productDescription: string;
  productSize: any;
  productImages: any[];
}

export const Description = ({
  productDescription,
  productSize,
  productImages,
}: DescriptionProps) => {
  const [showDescription, setShowDescription] = useState<boolean>(true);
  const [currentActive, setCurrentActive] = useState<Element>(
    document.getElementsByClassName("description-header")[0]
  );

  useEffect(() => {}, [setShowDescription]);

  const handleShowDescription = (e: any) => {
    e.preventDefault();
    setShowDescription(true);
    setCurrentActive(e.target);
  };
  const handleHideDescription = (e: any) => {
    e.preventDefault();
    setShowDescription(false);
    setCurrentActive(e.target);
  };

  return (
    <DescriptionContainer>
      <Wrapper>
        <DescriptionHeader className="description-header">
          <DescriptionText
            active={this === currentActive}
            onClick={(e) => handleShowDescription(e)}
          >
            Description
          </DescriptionText>
          <DescriptionText
            active={this === currentActive}
            onClick={(e) => handleHideDescription(e)}
          >
            Additionnal Information
          </DescriptionText>
        </DescriptionHeader>
        <DescriptionContent>
          {showDescription ? (
            <P>{productDescription}</P>
          ) : (
            <DescriptionSize>
              <TextBold>Size</TextBold> :{" "}
              {productSize.map((size: any, index: number) => (
                <TextSize key={index}>{size} </TextSize>
              ))}
            </DescriptionSize>
          )}
        </DescriptionContent>
      </Wrapper>
      <DescriptionImageContainer>
        {productImages.map((image, index) => (
          <DescriptionImage
            key={index}
            src={getBase64(image.data)}
            alt="Product image"
          />
        ))}
      </DescriptionImageContainer>
    </DescriptionContainer>
  );
};
