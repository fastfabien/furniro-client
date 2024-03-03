import React, { useState } from "react";
import {
  ErrorMessage,
  InputContainer,
  InputContent,
  Label,
  Textarea,
  InputSubscribeContent,
} from "../../Styles";
import { FormProps, SubscribeFormProps, handleInputChange } from "../../common";

export const Input = ({
  type,
  name,
  isRequired = false,
  isvalid,
  issubscribe,
  label,
}: FormProps) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  return (
    <InputContainer>
      <Label>{label}</Label>
      {type === "textarea" ? (
        <Textarea
          name={name}
          className={error ? "error" : ""}
          value={inputValue}
          onChange={(event) =>
            handleInputChange(event, setInputValue, setError)
          }
        />
      ) : (
        <InputContent
          className={error ? "error" : ""}
          type={type}
          value={inputValue}
          name={name}
          onChange={(event) =>
            handleInputChange(event, setInputValue, setError)
          }
        />
      )}
      {error && <ErrorMessage>Invalid {type} value</ErrorMessage>}
    </InputContainer>
  );
};

export const InputSubscribe = ({ label }: SubscribeFormProps) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  return (
    <InputContainer>
      <InputSubscribeContent
        type="email"
        placeholder={label}
        value={inputValue}
        onChange={(event) => handleInputChange(event, setInputValue, setError)}
      />
      {error && <ErrorMessage>Invalid email value</ErrorMessage>}
    </InputContainer>
  );
};
