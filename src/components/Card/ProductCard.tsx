import React from "react";
import {
  ProductCardAction,
  ProductCardBody,
  ProductCardContainer,
  ProductCardHeader,
} from "../../Styles/components/Card";
import { TextBold, TextLight } from "../../Styles/Typography";
import { Button } from "../Button";

interface ProductCardProps {
  src: string;
  name: string;
  short_description: string;
  price: string;
  alt: string;
  href: string;
}

export const ProductCard = ({
  src,
  name,
  short_description,
  price,
  alt,
  href,
}: ProductCardProps) => {
  return (
    <ProductCardContainer to={href}>
      <ProductCardHeader src={src} alt={alt} />
      <ProductCardBody>
        <TextBold>{name}</TextBold>
        <TextLight>{short_description}</TextLight>
        <TextBold>$ {price}</TextBold>
      </ProductCardBody>
      <ProductCardAction>
        <Button primary={false}>Add to cart</Button>
      </ProductCardAction>
    </ProductCardContainer>
  );
};
