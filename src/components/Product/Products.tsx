import React from "react";
import {
  H2,
  PaginationContainer,
  ProductsContainer,
  ProductsContent,
} from "../../Styles";
import { ProductCard } from "../Card";
import { Button } from "../Button";

interface ProductsProps {
  title?: string;
  limit?: number;
  pagination?: boolean;
  products: any[];
}

export const Products = ({
  title,
  limit,
  pagination,
  products,
}: ProductsProps) => {
  return (
    <ProductsContainer>
      {title && <H2>{title}</H2>}
      <ProductsContent>
        {products.slice(0, limit).map((product, item) => (
          <ProductCard
            key={item}
            src={product.src}
            name={product.name}
            short_description={product.short_description}
            price={product.price}
            alt={product.name}
            href={product.href}
          />
        ))}
      </ProductsContent>
      {!pagination ? (
        <Button primary={false} href="/shop">
          Show more
        </Button>
      ) : (
        <PaginationContainer>pagination</PaginationContainer>
      )}
    </ProductsContainer>
  );
};
