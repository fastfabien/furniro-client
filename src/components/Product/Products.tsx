import React, { useEffect } from "react";
import {
  H2,
  P,
  PaginationContainer,
  ProductsContainer,
  ProductsContent,
} from "../../Styles";
import { ProductCard } from "../Card";
import { PaginationButton } from "../Button";
import { PaginationState, Product } from "../../features/product/product.slice";
import { Loading } from "../Loading";

interface ProductsProps {
  isLoading: boolean;
  products: Product[];
  pagination: PaginationState;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  title?: string;
}

export const Products = ({
  isLoading,
  products,
  pagination,
  currentPage,
  setCurrentPage,
  title,
}: ProductsProps) => {
  return (
    <ProductsContainer>
      {title && <H2>{title}</H2>}
      {isLoading ? (
        <Loading />
      ) : (
        <ProductsContent>
          {products ? (
            products.map((product: any, item: number) => (
              <ProductCard
                key={item}
                src={product.image.data}
                name={product.name}
                short_description="mandona"
                price={product.price}
                alt={product.name}
                href={product.href}
              />
            ))
          ) : (
            <P>No product yet.</P>
          )}
        </ProductsContent>
      )}
      {pagination && pagination.totalPages > 1 && (
        <PaginationContainer>
          {currentPage > 1 && (
            <PaginationButton
              isactive={false}
              index={currentPage - 1}
              setCurrentPage={setCurrentPage}
            >
              Prev
            </PaginationButton>
          )}
          {Array.from({ length: pagination.totalPages }, (_, index) => (
            <PaginationButton
              key={index + 1}
              isactive={index + 1 === currentPage}
              index={index + 1}
              setCurrentPage={setCurrentPage}
            >
              {index + 1}
            </PaginationButton>
          ))}
          {currentPage < pagination.totalPages && (
            <>
              <PaginationButton
                isactive={false}
                index={currentPage + 1}
                setCurrentPage={setCurrentPage}
              >
                Next
              </PaginationButton>
            </>
          )}
        </PaginationContainer>
      )}
    </ProductsContainer>
  );
};
