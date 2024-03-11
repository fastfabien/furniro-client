import React, { useEffect } from "react";
import { Wrapper } from "../../../Styles";
import { Landing, Products, Range, Rooms } from "./section";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { useAppDispatch } from "../../../app/hook";
import { getProducts } from "../../../features/product/product.slice";

export const Home = () => {
  const { isLoading, products } = useSelector(
    (state: RootState) => state.product
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts({ page: 1, limit: 8 }));
  }, [dispatch]);

  console.log(products);

  return (
    <>
      <Landing />
      <Wrapper>
        <Range />
        <Products isLoading={isLoading} products={products} />
      </Wrapper>
      <Rooms />
    </>
  );
};
