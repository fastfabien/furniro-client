import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../../app/store";
import { useAppDispatch } from "../../../app/hook";
import { getProduct } from "../../../features/product/product.slice";
import {
  Action,
  Loading,
  ProductImages,
  Rate,
  ShopButton,
  SizeSelector,
} from "../../../components";
import {
  Form,
  H1,
  P,
  ProductContainer,
  ProductInfo,
  Rating,
  TextLight,
  Wrapper,
} from "../../../Styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLinesVertical } from "@fortawesome/free-solid-svg-icons";
import { Hr, More, MoreContent } from "../../../Styles/components/Action";
import { Description } from "../../../components/Product/Description";

interface ImageObject {
  type: string;
  data: any[];
}

export const ShopProduct = () => {
  const { isLoading, product } = useSelector(
    (state: RootState) => state.product
  );

  const [hasError, setHasError] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  const handleAddToCard = (e: any) => {
    e.preventDefault();

    const checkBoxs: any = document.querySelectorAll("input[type='radio']");

    for (let i = 0; i < checkBoxs.length; i++) {
      if (checkBoxs[i].checked) {
        setHasError(false);
      } else {
        setHasError(true);
      }
    }
  };

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
              <TextLight>Rs. {product.price}</TextLight>
              <Rating>
                <Rate starNumber={3} />
                <TextLight className="grip-lines">|</TextLight>
                <TextLight>5 customer review</TextLight>
              </Rating>

              <P>{product.short_description}</P>
              <Form onSubmit={(e) => handleAddToCard(e)}>
                {product.size && (
                  <SizeSelector product={product.size[0]} isError={hasError} />
                )}
                {product.images && (
                  <Action
                    image={product.images[0]}
                    name={product.name}
                    price={product.price}
                  />
                )}
              </Form>
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
