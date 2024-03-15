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
  CartItem,
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
import { CartForm, setToLocalString } from "../../../common";
import { addToCart } from "../../../features/cart/cart.slice";

interface ImageObject {
  type: string;
  data: any[];
}

export const ShopProduct = () => {
  const { isLoading, product } = useSelector(
    (state: RootState) => state.product
  );

  const { user } = useSelector((state: RootState) => state.auth);

  const { cart } = useSelector((state: RootState) => state.cart);

  const [hasError, setHasError] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id, cart]);

  const handleAddToCard = (e: any) => {
    e.preventDefault();

    const formData = e.target;

    let cartValue;

    if (product._id) {
      cartValue = {
        size: "",
        quantity: 0,
        product_id: product._id,
      };
    } else {
      cartValue = {
        size: "",
        quantity: 0,
        product_id: "",
      };
    }

    for (let i = 0; i < formData.length; i++) {
      if (formData[i].checked) {
        cartValue.size = formData[i].value;
      } else if (formData[i].type === "number") {
        cartValue.quantity = formData[i].value;
      }
    }

    dispatch(addToCart(cartValue));
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
              <TextLight>
                Rs. {setToLocalString(product.price, "fr-FR")}
              </TextLight>
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
