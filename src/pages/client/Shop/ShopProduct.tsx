import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../../app/store";
import { useAppDispatch } from "../../../app/hook";
import { getProduct } from "../../../features/product/product.slice";
import { reset } from "../../../features/auth/authSlice";
import { ProductImages } from "../../../components";
import { ProductContainer, ProductInfo, Wrapper } from "../../../Styles";

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
        <ProductInfo></ProductInfo>
      </ProductContainer>
    </Wrapper>
  );
};
