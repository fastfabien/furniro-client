import React from "react";
import {
  LinkText,
  NavbarAction,
  NavbarContainer,
  NavbarLink,
  NavbarLogo,
  RoundedUser,
} from "../../Styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { RootState } from "../../app/store";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((state: RootState) => state.auth);

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
          <LinkText to="/login">
            <FontAwesomeIcon icon={faUser} />
          </LinkText>
        )}
        <LinkText to="/">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </LinkText>
        <LinkText to="/">
          <FontAwesomeIcon icon={faHeart} />
        </LinkText>
        <LinkText to="/cart">
          <FontAwesomeIcon icon={faCartShopping} />
        </LinkText>
      </NavbarAction>
    </NavbarContainer>
  );
};

export default Navbar;