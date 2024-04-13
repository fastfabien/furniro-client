import React, { useEffect, useState } from "react";
import { getImageSrc } from "../../common";
import { CartItemImage } from "../../Styles";

interface CartItemImageProps {
  name: string;
}

export const CartItemImages = ({ name }: CartItemImageProps) => {
  const [imageSrc, setImageSrc] = useState<string>("");

  useEffect(() => {
    getImageSrc(setImageSrc, name);
  }, [name]);

  return <CartItemImage src={imageSrc} alt={name} />;
};
