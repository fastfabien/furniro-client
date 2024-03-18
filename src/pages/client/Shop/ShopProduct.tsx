import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../../app/store";
import { useAppDispatch } from "../../../app/hook";
import { getProduct } from "../../../features/product/product.slice";
import { AddToCart, Loading, ProductImages, Rate } from "../../../components";
import {
  H1,
  P,
  ProductContainer,
  ProductInfo,
  Rating,
  TextLight,
  Wrapper,
} from "../../../Styles";
import { Hr, More, MoreContent } from "../../../Styles/components/Action";
import { Description } from "../../../components/Product/Description";
import { setToLocalString } from "../../../common";

export const ShopProduct = () => {
  const { isLoading, product } = useSelector(
    (state: RootState) => state.product
  );

  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  return (
    <Wrapper>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ProductContainer>
            {product.images && <ProductImages images={product.images} />}
            <ProductInfo>
              <H1>{product.name}</H1>
              <TextLight>
                Rs. {setToLocalString(product.price, "fr-FR")}
              </TextLight>
              <Rating>
                <Rate starNumber={3} />
                <TextLight className="grip-lines">|</TextLight>
                <TextLight>5 customer review</TextLight>
              </Rating>

              <P>{product.short_description}</P>
              <AddToCart product={product} />
              <Hr />
              <More>
                <MoreContent>
                  <TextLight>SKU</TextLight>
                  <TextLight>:</TextLight>
                  <TextLight>SS{product.sku}</TextLight>
                </MoreContent>
                <MoreContent>
                  <TextLight>Category</TextLight>
                  <TextLight>:</TextLight>
                  <TextLight>Sofa</TextLight>
                </MoreContent>
                <MoreContent>
                  <TextLight>Tags</TextLight>
                  <TextLight>:</TextLight>
                  <TextLight>Sofa, Chair, Home, Shop</TextLight>
                </MoreContent>
              </More>
            </ProductInfo>
          </ProductContainer>
          <Hr />
          {product.images && (
            <Description
              productImages={product.images.slice(0, 2)}
              productDescription={product.description}
              productSize={product.size[0]}
            />
          )}
          <Hr />
        </>
      )}
    </Wrapper>
  );
};
