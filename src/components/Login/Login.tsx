import React, { useState } from "react";
import { LoginContainer, LoginCardContent } from "../../Styles";
import { Login } from "../../pages";

interface LoginCardProps {
  showLogin: boolean;
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoginCard = ({ showLogin, setShowLogin }: LoginCardProps) => {
  // const handleClick = (e: any): void => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   setShowLogin(!showLogin);
  // };

  const [isLogin, setIsLogin] = useState<boolean>(true);

  return (
    <LoginContainer>
      <LoginCardContent>
        <Login
          isLogin={isLogin}
          showLogin={showLogin}
          setShowLogin={setShowLogin}
          setIsLogin={setIsLogin}
        />
      </LoginCardContent>
    </LoginContainer>
  );
};
