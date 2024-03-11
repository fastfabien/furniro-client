import React, { useEffect, useState } from "react";
import { getBase64 } from "../../common";
import {
  AllImagesContainer,
  CurrentImages,
  ProductImagesContainer,
  ThumbsImages,
} from "../../Styles";

interface ImageObject {
  type: string;
  data: any[]; // Ou tout autre type approprié pour les données d'image
}

interface ProductImageProps {
  images: ImageObject[];
}

export const ProductImages = React.memo(({ images }: ProductImageProps) => {
  const [currentActive, setCurrentActive] = useState<string>(
    getBase64(images[0].data)
  );

  useEffect(() => {
    // Préchargement des images
    images.forEach((image) => {
      new Image().src = getBase64(image.data);
    });
  }, [images]);

  const handleSetActive = (e: any, image: string) => {
    e.preventDefault();
    setCurrentActive(image);
  };

  return (
    <ProductImagesContainer>
      <AllImagesContainer>
        {images.map((image, index) => (
          <ThumbsImages
            key={index}
            src={getBase64(image.data)}
            alt="Product image"
            isactive={getBase64(image.data) === currentActive}
            onMouseDown={(e) => handleSetActive(e, getBase64(image.data))}
          />
        ))}
      </AllImagesContainer>
      <CurrentImages src={currentActive} alt="Product image" />
    </ProductImagesContainer>
  );
});
