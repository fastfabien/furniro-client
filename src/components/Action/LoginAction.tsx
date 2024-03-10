import React from "react";
import { NavText } from "../../Styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { LoginCard } from "../Login";

interface LoginActionProps {
  showLogin: boolean;
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoginAction = ({ showLogin, setShowLogin }: LoginActionProps) => {
  return (
    <>
      <NavText onClick={() => setShowLogin(!showLogin)}>
        <FontAwesomeIcon icon={faUser} />
      </NavText>
      {showLogin && (
        <LoginCard showLogin={showLogin} setShowLogin={setShowLogin} />
      )}
    </>
  );
};
