import React, { useEffect, useState } from "react";
import { Product } from "../../features/product/product.slice";
import { Checkbox } from "../Forms";
import { ErrorMessage, SizeConteiner, TextLight } from "../../Styles";

interface SizeSelectorProps {
  product: string[];
  isError: boolean;
}

export const SizeSelector = ({ product, isError }: SizeSelectorProps) => {
  const [currentActive, setCurrentActive] = useState<HTMLInputElement | null>(
    null
  );

  useEffect(() => {
    const firstCheckBox = document.querySelector<HTMLInputElement>(
      "input[type='checkbox']"
    );
    if (firstCheckBox) {
      setCurrentActive(firstCheckBox);
    }
  }, [setCurrentActive]);

  return (
    <>
      <TextLight>Size</TextLight>
      <SizeConteiner>
        {product.map((size: string, index: number) => (
          <Checkbox
            isActive={size === currentActive?.value}
            setIsActive={setCurrentActive}
            key={index}
            name={size}
            value={size}
          />
        ))}
      </SizeConteiner>
      {isError && <ErrorMessage>Please select one size.</ErrorMessage>}
    </>
  );
};
