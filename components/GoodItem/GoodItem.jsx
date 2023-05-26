import React, { useContext } from "react";
import Image from "next/image";
import {
  StyledBtn,
  StyledImg,
  StyledName,
  StyledWrapper,
} from "./GoodItem.styled";
import { CartContext } from "../../lib/context";

export const GoodItem = ({ handleAddProduct, good }) => {
  const { cartItems } = useContext(CartContext);
  const { product, image, _id } = good;

  const itemInCart = cartItems.find((item) => item._id === _id);

  return (
    <StyledWrapper>
      <StyledImg>
        <Image src={image} alt={product} width={640} height={480} />
      </StyledImg>
      <StyledName>{product}</StyledName>
      <StyledBtn onClick={() => handleAddProduct(good)}>
        {!!itemInCart ? `Added to Cart: ${itemInCart.quantity}` : "Add to Cart"}
      </StyledBtn>
    </StyledWrapper>
  );
};
