import React, { useState } from "react";
import { ActionInput } from "../../Styles/components/Action";
import { AddToCard, InputNumber } from "../../Styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

interface ShopButtonProps {
  type: string;
  children?: React.ReactNode;
}

export const ShopButton = ({ type, children }: ShopButtonProps) => {
  const [inputValue, setInputValue] = useState<number>(1);

  const handleChangeInputValue = (signe: string) => {
    if (signe === "-" && inputValue > 1) {
      setInputValue(inputValue - 1);
    } else if (signe === "+") {
      setInputValue(inputValue + 1);
    }
  };

  return (
    <>
      {type === "number" ? (
        <ActionInput data-testid="action-input">
          <FontAwesomeIcon
            data-testid="minus"
            icon={faMinus}
            onClick={() => handleChangeInputValue("-")}
          />
          <InputNumber type={type} value={inputValue} readOnly />
          <FontAwesomeIcon
            data-testid="plus"
            icon={faPlus}
            onClick={() => handleChangeInputValue("+")}
          />
        </ActionInput>
      ) : (
        <AddToCard data-testid="add-to-cart" type={type}>
          {children}
        </AddToCard>
      )}
    </>
  );
};
