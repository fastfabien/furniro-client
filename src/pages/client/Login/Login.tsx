import React, { useEffect } from "react";
import { Input, PageLayout, SubmitButton } from "../../../components";
import {
  ErrorMessage,
  Form,
  H2,
  LoginContainer,
  Wrapper,
} from "../../../Styles";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../../../features/auth/authSlice";
import { useAppDispatch } from "../../../app/hook";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";

export const Login = () => {
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess || user) navigate("/");
  }, [user, isError, isSuccess, isLoading, message, dispatch, navigate]);

  function handleSubmit(e: any): void {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    const userData = { email, password };

    dispatch(login(userData));
  }
  return (
    <PageLayout pageName="login">
      <Wrapper>
        <LoginContainer>
          <H2>Login</H2>
          <Form onSubmit={(e) => handleSubmit(e)} noValidate>
            <Input type="email" label="email address" name="email" />
            <Input type="password" label="Password" name="password" />
            {isError && <ErrorMessage>{message}</ErrorMessage>}
            <SubmitButton>login</SubmitButton>
          </Form>
        </LoginContainer>
      </Wrapper>
    </PageLayout>
  );
};
