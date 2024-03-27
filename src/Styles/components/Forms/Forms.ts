import styled, { css, keyframes } from "styled-components";

const showError = keyframes`

  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }

`;

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

export const SuccessMessage = styled.div`
  position: fixed;
  top: 8vw;
  right: 0;
  padding: 1.1805555555555556vw 3.3333333333333335vw;
  background-color: ${(p) => p.theme.gold};
  color: ${(p) => p.theme.white};
  transform: translateX(100%);
  transition: transform 0.5s ease;

  animation: ${showError} 1s ease;

  & a {
    font-weight: 800;
    text-decoration: underline;
  }
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

export const Label = styled.label`
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

  & ${InputContainer} {
    margin-bottom: 0 !important;
  }
`;

export const InputFilesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vw;
`;

export const InputFile = styled.input`
  display: none;
`;

export const LabelInputfiles = styled.label`
  height: 3vw;
  width: 30%;
  background-color: ${(p) => p.theme.blackGray};
  padding: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: ${(p) => p.theme.white};
  font-size: 1.3vw;
  font-weight: 800;
  cursor: pointer;
`;

export const InputImageContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 1vw;
  background-color: ${(p) => p.theme.lightPeach};

  & .image-container {
    width: 5vw;
    height: 5vw;
    position: relative;

    &:hover span {
      display: block;
    }
  }

  & span {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1vw;
    font-weight: 400;
    padding: 0.1vw 0.5vw;
    background-color: rgba(${(p) => p.theme.dimgrayRgba}, 0.5);
    border-radius: 50%;
    color: ${(p) => p.theme.white};
    cursor: pointer;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const FormFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 2vw;
`;

export const TextedLink = styled.span`
  color: ${(p) => p.theme.gold};
  font-weight: 800;
  font-size: 1.2vw;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const CheckBoxContainer = styled.div`
  display: flex;
`;

export interface CheckBoxLabelProps {
  isactive: boolean;
}

export const CheckBoxLabel = styled(Label)<CheckBoxLabelProps>`
  background-color: ${(p) => (p.isactive ? p.theme.gold : p.theme.lightPeach)};
  color: ${(p) => (p.isactive ? p.theme.white : p.theme.black)};
  padding: 5px 8px;
  font-size: 13px;
  font-weight: 400;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
  min-width: 2.0833333333333335vw;
  height: 2.0833333333333335vw;
  text-align: center;
`;

export const InputHidden = styled.input`
  display: none;
`;

export const InputSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SearchInput = styled.input`
  background-color: unset;
  color: ${(p) => p.theme.white};
  outline: none;
  border: none;
  border-bottom: 2px solid ${(p) => p.theme.white};
  padding: 2vw 1vw 0.5vw 0;
  font-size: 2vw;
  text-align: center;
`;

export const InputSelectContainer = styled.select<{ icon: any }>`
  ${inputValue};
  appearance: none;
  position: relative;

  background-image: url(${(p) => p.icon});
  background-repeat: no-repeat;
  background-position: right 1.875vw center;
  background-size: 1.3888888888888888vw;
  text-transform: capitalize;

  & option {
    color: ${(p) => p.theme.white};
    background-color: ${(p) => p.theme.gold};
    text-transform: capitalize;
  }
`;

export const BillingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 42.22222222222222vw;
  gap: 2.5vw;
  padding: 2.4305555555555554vw 3.138888888888889vw;
`;

export const BillingForm = styled.div`
  display: flex;
  flex-direction: column;

  & input {
    width: 100%;
  }
`;

export const UserName = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.0833333333333335vw;
`;

export const FormRow = styled.form`
  display: flex;
  flex-direction: row;
  gap: 4.444444444444445vw;
`;

export const BillingDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6.041666666666667vw 2.638888888888889vw;
  width: 42.22222222222222vw;
`;

export const BillingDetailsHeader = styled.table`
  border-collapse: separate;
  border-spacing: 10px;

  & th {
    text-align: left;
    text-transform: capitalize;
    font-size: 1.6666666666666667vw;
    font-weight: 500;

    &:last-child {
      text-align: right;
    }
  }

  & td {
    font-size: 0.8333333333333334vw;
    & span {
      text-transform: capitalize;
      font-size: 1.1111111111111112vw;
    }
  }

  & td:last-child {
    font-size: 1.1111111111111112vw;
    text-align: right;
    font-weight: bold;
    & div {
      justify-content: flex-end;
    }
  }
`;

export const TdContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const TdTotal = styled.td`
  font-size: 1.1111111111111112vw !important;
`;

export const TdTotalValue = styled.td`
  font-size: 1.6666666666666667vw !important;
  font-weight: bold;
  color: ${(p) => p.theme.gold};
`;

export const BillingBody = styled.div`
  margin-top: 2.7777777777777777vw;
  padding-top: 1.5625vw;
  border-top: 2px solid ${(p) => p.theme.pureGray};
  display: flex;
  flex-direction: column;
  gap: 1.7361111111111112vw;
`;

export const BillingPaymentContainer = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 11px;

  & label {
    margin-bottom: unset;
    font-size: 1.1111111111111112vw;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    position: relative;
    padding-left: 20px;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 14px;
      height: 14px;
      border-radius: 50%;
      border: 1px solid ${(p) => p.theme.black};
      background-color: ${(p) => (p.isActive ? p.theme.black : p.theme.white)};
      display: block;
    }
  }
`;

export const PaymentDescription = styled.p`
  font-weight: 100;
  font-size: 1vw;
  color: ${(p) => p.theme.lightGray};
  width: 36.666666666666664vw;
`;
