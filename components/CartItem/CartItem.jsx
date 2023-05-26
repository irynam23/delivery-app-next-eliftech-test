import React from "react";
import {
  StyledCounter,
  StyledImg,
  StyledName,
  StyledPrice,
  StyledWrapper,
  StyledBtn,
  StyledArrows,
  StyledSum,
  StyledDelete,
} from "./CartItem.styled";
import Image from "next/image";

import UpIcon from "../../public/icons/circle-up.svg";
import DownIcon from "../../public/icons/circle-down.svg";

export const CartItem = ({ good, handleEditQuantity }) => {
  const { product, image, price, quantity } = good;

  return (
    <StyledWrapper>
      <StyledImg>
        <Image src={image} alt={product} width={640} height={480} />
      </StyledImg>
      <StyledName>{product}</StyledName>
      <StyledPrice>
        {price}
        <span> USD</span>
      </StyledPrice>
      <StyledCounter>
        <StyledSum>{quantity}</StyledSum>
        <StyledArrows>
          <StyledBtn onClick={() => handleEditQuantity(good, "add")}>
            <UpIcon />
          </StyledBtn>
          <StyledBtn onClick={() => handleEditQuantity(good, "decrement")}>
            <DownIcon />
          </StyledBtn>
        </StyledArrows>
        <StyledDelete onClick={() => handleEditQuantity(good, "delete")}>
          Delete
        </StyledDelete>
      </StyledCounter>
    </StyledWrapper>
  );
};
