import React, { useEffect, useState } from "react";
import { Product } from "../../features/product/product.slice";
import { Checkbox } from "../Forms";
import { SizeConteiner } from "../../Styles";

interface SizeSelectorProps {
  product: string[];
}

const SizeSelector = ({ product }: SizeSelectorProps) => {
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
  );
};

export default SizeSelector;
