import React from "react";
import {
  Btn,
  BtnLink,
  ButtonPagination,
  CartButtonContainer,
  InputSubmit,
  SubscribeButton,
} from "../../Styles/components";
import { ButtonProps } from "../../common";

export const Button = ({ href, primary = "true", children }: ButtonProps) => {
  return (
    <>
      {href ? (
        <BtnLink data-testid="btn-link" primary={primary} to={href}>
          {children}
        </BtnLink>
      ) : (
        <Btn primary={primary} data-testid="btn">
          {children}
        </Btn>
      )}
    </>
  );
};

interface SubscribeButtonProps {
  children: string;
}

export const ButtonSubscribe = ({ children }: SubscribeButtonProps) => {
  return (
    <SubscribeButton data-testid="subscribe" type="submit" value={children} />
  );
};

interface SubmitButtonProps {
  children: string;
}
export const SubmitButton = ({ children }: SubmitButtonProps) => {
  return <InputSubmit data-testid="submit" type="submit" value={children} />;
};

interface PaginationButtonProps {
  children: React.ReactNode;
  isactive: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  index: number;
}

export const PaginationButton = ({
  children,
  isactive,
  setCurrentPage,
  index,
}: PaginationButtonProps) => {
  const handleSetCurrentPage = (e: any) => {
    e.preventDefault();
    setCurrentPage(index);
  };

  return (
    <ButtonPagination
      isactive={isactive}
      onClick={(e) => handleSetCurrentPage(e)}
    >
      {children}
    </ButtonPagination>
  );
};

interface CartButtonProps {
  href: string;
  children: React.ReactNode;
}

export const CartButton = ({ href, children }: CartButtonProps) => {
  return <CartButtonContainer to={href}>{children}</CartButtonContainer>;
};
