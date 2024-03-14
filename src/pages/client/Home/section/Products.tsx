import React from "react";
import { H2, P, ProductsContainer, ProductsContent } from "../../../../Styles";
import { Button, Loading, ProductCard } from "../../../../components";
import { Product } from "../../../../features/product/product.slice";

interface ProductProps {
  isLoading: boolean;
  products: Product[];
}

export const Products = ({ isLoading, products }: ProductProps) => {
  return (
    <ProductsContainer>
      <H2>Our Products</H2>
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
                href={product.id}
              />
            ))
          ) : (
            <P>No product yet.</P>
          )}
        </ProductsContent>
      )}
      <Button primary="false" href="/shop">
        Show more
      </Button>
    </ProductsContainer>
  );
};
