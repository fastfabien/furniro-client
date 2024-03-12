import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../../app/store";
import { useAppDispatch } from "../../../app/hook";
import { getProduct } from "../../../features/product/product.slice";
import { reset } from "../../../features/auth/authSlice";
import { Checkbox, ProductImages, Rate } from "../../../components";
import {
  Form,
  H1,
  P,
  ProductContainer,
  ProductInfo,
  Rating,
  SizeConteiner,
  TextLight,
  Wrapper,
} from "../../../Styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLinesVertical } from "@fortawesome/free-solid-svg-icons";
import SizeSelector from "../../../components/Product/SizeSelector";

interface ImageObject {
  type: string;
  data: any[]; // Ou tout autre type approprié pour les données d'image
}

interface ProductImageProps {
  images: ImageObject[];
}

export const ShopProduct = () => {
  const { isLoading, product, message } = useSelector(
    (state: RootState) => state.product
  );

  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  return (
    <Wrapper>
      <ProductContainer>
        {product.images && <ProductImages images={product.images} />}
        <ProductInfo>
          <H1>{product.name}</H1>
          <TextLight>Rs. {product.price}</TextLight>
          <Rating>
            <Rate starNumber={3} />
            <FontAwesomeIcon
              className="grip-lines"
              icon={faGripLinesVertical}
            />
            <TextLight>5 customer review</TextLight>
          </Rating>

          <P>{product.short_description}</P>
          <Form>
            <TextLight>Size</TextLight>
            {product.size && <SizeSelector product={product.size[0]} />}
          </Form>
        </ProductInfo>
      </ProductContainer>
    </Wrapper>
  );
};
