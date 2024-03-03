import React from "react";
import { ArrivalCardContainer } from "../../Styles/components/Card";
import { H1, P, SpacingText } from "../../Styles/Typography";
import { Button } from "../Button";

interface ArrivalCardProps {
  title: string;
  description: string;
  slug: string;
}

const ArrivalCard = ({ title, description, slug }: ArrivalCardProps) => {
  return (
    <ArrivalCardContainer>
      <SpacingText>{slug}</SpacingText>
      <H1>{title}</H1>
      <P>{description}</P>
      <Button>Buy now</Button>
    </ArrivalCardContainer>
  );
};

export default ArrivalCard;
