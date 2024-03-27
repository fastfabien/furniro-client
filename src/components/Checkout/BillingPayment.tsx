import React, { useEffect, useState } from "react";
import {
  BillingPaymentContainer,
  InputHidden,
  Label,
  PaymentDescription,
} from "../../Styles";

interface BillingPaymentProps {
  name: string;
  description: string;
  setCurrentActive: React.Dispatch<
    React.SetStateAction<HTMLInputElement | undefined>
  >;
  currentActive: HTMLInputElement | undefined;
}

export const BillingPayment = ({
  name,
  description,
  setCurrentActive,
  currentActive,
}: BillingPaymentProps) => {
  const [currentElement, setCurrentElement] = useState<HTMLInputElement>();
  const [id, setId] = useState<string>();

  useEffect(() => {
    setId(`${name}-${Math.floor(Math.random() * (100 - 10)) + 10}`);
    if (id) {
      const element = document.getElementById(id) as HTMLInputElement;
      setCurrentElement(element);
    }
  }, [currentActive, name, currentElement, id]);

  const handleCheckRadio = (e: any) => {
    e.preventDefault();
    if (e.target.checked) {
      setCurrentActive(e.target);
    } else {
      setCurrentActive(currentActive);
    }
  };

  return (
    <BillingPaymentContainer isActive={currentElement === currentActive}>
      <Label htmlFor={id}>{name}</Label>
      <InputHidden
        type="checkbox"
        name={name}
        value={name}
        checked={currentElement === currentActive}
        onChange={(e) => handleCheckRadio(e)}
        id={id}
      />
      {currentElement === currentActive && (
        <PaymentDescription>{description}</PaymentDescription>
      )}
    </BillingPaymentContainer>
  );
};
