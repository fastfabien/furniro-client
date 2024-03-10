import { useEffect } from "react";
import { Input, SubmitButton } from "../../../components";
import {
  ErrorMessage,
  Form,
  FormFooter,
  H2,
  LoginContent,
  RegisterContainer,
  RegisterContent,
  RoundedUser,
  TextedLink,
} from "../../../Styles";
import { useNavigate } from "react-router-dom";
import { login, register } from "../../../features/auth/authSlice";
import { useAppDispatch } from "../../../app/hook";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { LoginProps } from "../../../common";

export const Login = ({
  showLogin,
  setShowLogin,
  isLogin,
  setIsLogin,
}: LoginProps) => {
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess || user) setShowLogin(!showLogin);
  }, [
    user,
    isError,
    isSuccess,
    isLoading,
    message,
    dispatch,
    navigate,
    showLogin,
    setShowLogin,
  ]);

  function handleSubmit(e: any): void {
    e.preventDefault();

    const formData = e.target;
    const formValue: any = {};

    for (let i = 0; i < formData.length; i++) {
      if (formData[i].name !== "confirm_password") {
        formValue[formData[i].name] = formData[i].value;
      }
    }

    const { name, email, password } = formValue;

    if (isLogin) {
      const userData = { email, password };
      dispatch(login(userData));
    } else {
      const userData = { name, email, password };
      dispatch(register(userData));
    }
  }
  return (
    <LoginContent>
      <RoundedUser onClick={() => setShowLogin(!showLogin)}>x</RoundedUser>
      <H2>{isLogin ? "Login" : "Register"}</H2>
      {isLogin ? (
        <Form onSubmit={(e) => handleSubmit(e)} noValidate>
          <Input type="email" label="email address" name="email" />
          <Input type="password" label="Password" name="password" />
          {isError && <ErrorMessage>{message}</ErrorMessage>}
          <FormFooter>
            <SubmitButton>login</SubmitButton>
            <TextedLink onClick={() => setIsLogin(!isLogin)}>
              Create account ?
            </TextedLink>
          </FormFooter>
        </Form>
      ) : (
        <Form onSubmit={(e) => handleSubmit(e)} noValidate>
          <RegisterContainer>
            <RegisterContent>
              <Input type="text" label="your name" name="name" />
              <Input type="email" label="email address" name="email" />
            </RegisterContent>
            <RegisterContent>
              <Input type="password" label="Password" name="password" />
              <Input
                type="password"
                label="Confirm password"
                name="confirm_password"
              />
            </RegisterContent>
          </RegisterContainer>
          {isError && <ErrorMessage>{message}</ErrorMessage>}
          <FormFooter>
            <SubmitButton>Register</SubmitButton>
            <TextedLink onClick={() => setIsLogin(!isLogin)}>
              Already have an account ?
            </TextedLink>
          </FormFooter>
        </Form>
      )}
    </LoginContent>
  );
};
