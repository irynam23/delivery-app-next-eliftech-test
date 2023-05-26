import React from "react";
import { useRouter } from "next/router";
import { StyledNavLink, StyledWrapper } from "./Header.styled";

export const Header = () => {
  const { asPath } = useRouter();
  return (
    <StyledWrapper>
      <StyledNavLink className={asPath === "/" ? "active" : ""} href="/">
        Shop
      </StyledNavLink>
      <StyledNavLink
        className={asPath === "/cart" ? "active" : ""}
        href="/cart"
      >
        Shopping Cart
      </StyledNavLink>
    </StyledWrapper>
  );
};
