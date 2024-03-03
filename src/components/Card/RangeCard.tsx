import React from "react";
import { RangeCardContainer } from "../../Styles/components/Card";
import { TextBold } from "../../Styles/Typography";

interface RangeCardProps {
  src: string;
  alt: string;
  name: string;
}

export const RangeCard = ({ src, alt, name }: RangeCardProps) => {
  return (
    <RangeCardContainer>
      <img src={src} alt={alt} />
      <TextBold>{name}</TextBold>
    </RangeCardContainer>
  );
};
