import React from "react";
import { PageLayout, Products } from "../../../components";
import { Wrapper } from "../../../Styles";
import { products } from "../../../data";

export const Shop = () => {
  return (
    <PageLayout pageName="shop">
      <Wrapper>
        <Products
          limit={8}
          pagination
          title="our product"
          products={products}
        />
      </Wrapper>
    </PageLayout>
  );
};
