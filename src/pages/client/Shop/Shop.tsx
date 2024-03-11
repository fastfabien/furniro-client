import React, { useEffect, useState } from "react";
import { PageLayout, Products } from "../../../components";
import { Wrapper } from "../../../Styles";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { useAppDispatch } from "../../../app/hook";
import { getProducts } from "../../../features/product/product.slice";

export const Shop = () => {
  const { isLoading, products, pagination } = useSelector(
    (state: RootState) => state.product
  );

  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts({ page: currentPage, limit: 8 }));
  }, [dispatch, currentPage]);

  console.log(pagination);

  return (
    <PageLayout pageName="shop">
      <Wrapper>
        <Products
          isLoading={isLoading}
          products={products}
          pagination={pagination}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Wrapper>
    </PageLayout>
  );
};
