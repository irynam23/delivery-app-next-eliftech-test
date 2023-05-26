import styled from "styled-components";
import Link from "next/link";

export const StyledWrapper = styled.nav`
  display: flex;
  margin: 0 auto;
  padding: 20px 60px;
  width: 100%;
  gap: 8px;

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

export const StyledNavLink = styled(Link)`
  display: flex;
  text-decoration: none;
  align-items: center;

  &:not(:last-child):after {
    content: "";
    display: block;
    background-color: green;
    width: 4px;
    height: 24px;
    margin-left: 8px;
  }

  &.active {
    color: blue;
    text-decoration: underline;
  }

  & :hover,
  :focus {
    color: blue;
  }
`;
