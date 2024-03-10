import React from "react";
import { LogoutText } from "../../Styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hook";
import { reset, signOut } from "../../features/auth/authSlice";

export const LogOut = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const logoutFn = () => {
    dispatch(signOut());
    dispatch(reset());
    navigate("/");
    window.location.reload();
  };

  return (
    <LogoutText onClick={logoutFn}>
      <FontAwesomeIcon icon={faSignOut} />
    </LogoutText>
  );
};
