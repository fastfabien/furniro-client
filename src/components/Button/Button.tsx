import React from "react";
import {
  Btn,
  BtnLink,
  InputSubmit,
  SubscribeButton,
} from "../../Styles/components";
import { ButtonProps } from "../../common";

export const Button = ({ href, primary = true, children }: ButtonProps) => {
  return (
    <>
      {href ? (
        <BtnLink primary={primary} to={href}>
          {children}
        </BtnLink>
      ) : (
        <Btn primary={primary} href={href}>
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
  return <SubscribeButton type="submit" value={children} />;
};

interface SubmitButtonProps {
  children: string;
}
export const SubmitButton = ({ children }: SubmitButtonProps) => {
  return <InputSubmit type="submit" value={children} />;
};
