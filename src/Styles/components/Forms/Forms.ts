import styled, { css } from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2.5vw;

  & > div {
    width: 50%;
  }
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

const inputValue = css`
  padding: 1.7361111111111112vw 2.0833333333333335vw;
  outline: none;
  border: 1px solid ${(p) => p.theme.blackGray};
  border-radius: 10px;
  font-size: 1.1111111111111112vw;
  font-weight: 400;
  color: ${(p) => p.theme.black};

  &.error {
    border-color: ${(p) => p.theme.red};
  }

  &::placeholder {
    color: ${(p) => p.theme.blackGray};
    text-transform: capitalize;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  &:not(last-child) {
    margin-bottom: 2.5vw;
  }
`;

export const Label = styled.span`
  font-weight: 600;
  color: ${(p) => p.theme.black};
  text-transform: capitalize;
  font-size: 16px;
  letter-spacing: 0%;
  margin-bottom: 1.5277777777777777vw;
`;

export const InputContent = styled.input`
  ${inputValue}
`;

export const Textarea = styled.textarea`
  ${inputValue}
  resize: none;
`;

export const ErrorMessage = styled.span`
  color: ${(p) => p.theme.red};
  font-weight: 600;
  font-size: 14px;
  margin-top: 1vw;
`;

export const InputSubscribeContent = styled.input`
  border: none;
  outline: none;
  border-bottom: 2px solid ${(p) => p.theme.black};
  font-size: 0.9722222222222222vw;
  padding: 0.2vw;
  padding-left: 0;
  width: 13.88888888888889vw;

  & + ${ErrorMessage} {
    position: absolute;
    bottom: -100%;
  }
  &::placeholder {
    font-weight: 500;
    text-transform: capitalize;
  }
`;

export const SubscribeContainer = styled.form`
  display: flex;
  flex-direction: row;
  gap: 11px;
`;
