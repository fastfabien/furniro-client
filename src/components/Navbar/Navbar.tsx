import React, { useEffect, useState } from "react";
import {
  LinkText,
  NavbarAction,
  NavbarContainer,
  NavbarLink,
  NavbarLogo,
  RoundedUser,
} from "../../Styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { RootState } from "../../app/store";
import { useSelector } from "react-redux";
import { LogOut } from "../LogOut";
import { LoginAction } from "../Action";
import { CartItems } from "../Cart";
import { Search } from "../Search";

const Navbar = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const [showLogin, setShowLogin] = useState<boolean>(false);

  useEffect(() => {}, [user]);

  return (
    <NavbarContainer>
      <NavbarLogo to="/"></NavbarLogo>
      <NavbarLink>
        <LinkText to="/">Home</LinkText>
        <LinkText to="/shop">Shop</LinkText>
        <LinkText to="/about">About</LinkText>
        <LinkText to="/contact">Contact</LinkText>
      </NavbarLink>
      <NavbarAction>
        {user ? (
          <RoundedUser>{user.name[0]}</RoundedUser>
        ) : (
          <LoginAction showLogin={showLogin} setShowLogin={setShowLogin} />
        )}
        <Search />
        <LinkText to="/">
          <FontAwesomeIcon icon={faHeart} />
        </LinkText>
        <CartItems />
        {user && <LogOut />}
      </NavbarAction>
    </NavbarContainer>
  );
};

export default Navbar;
