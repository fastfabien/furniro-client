import React from "react";
import { H2, ProductsContainer, ProductsContent } from "../../../../Styles";
import { Button, ProductCard } from "../../../../components";
import { products } from "../../../../data";

// src: string;
// name: string;
// short_description: string;
// price: string;
// alt: string;
// href: string;

export const Products = () => {
  return (
    <ProductsContainer>
      <H2>Our Products</H2>
      <ProductsContent>
        {products.map((product, item) => (
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
      <Button primary={false} href="/shop">
        Show more
      </Button>
    </ProductsContainer>
  );
};
