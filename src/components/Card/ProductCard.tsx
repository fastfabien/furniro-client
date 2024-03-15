import React from "react";
import {
  ProductCardBody,
  ProductCardContainer,
  ProductCardHeader,
} from "../../Styles/components/Card";
import { TextBold, TextLight } from "../../Styles/Typography";
import { getBase64, setToLocalString } from "../../common";

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
    <ProductCardContainer to={"/shop/" + href}>
      <ProductCardHeader src={getBase64(src)} alt={alt} />
      <ProductCardBody>
        <TextBold>{name}</TextBold>
        <TextLight>{short_description}</TextLight>
        <TextBold>$ {setToLocalString(Number(price), "fr-FR")}</TextBold>
      </ProductCardBody>
      {/* <ProductCardAction>
        <Button primary={false}>Add to cart</Button>
      </ProductCardAction> */}
    </ProductCardContainer>
  );
};
