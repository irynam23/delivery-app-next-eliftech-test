import React, { useContext } from "react";
import { StyledList, StyledWrapper } from "./MainContent.styled";
import { GoodItem } from "../GoodItem/GoodItem";
import { editCard } from "../../helpers/cart";
import { CartContext } from "../../lib/context";

export const MainContent = ({ goods }) => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleAddProduct = (newProduct) => {
    const updatedCart = editCard({ cartItems, newProduct, action: "add" });
    setCartItems(updatedCart);
  };
  return (
    <StyledWrapper>
      <StyledList>
        {goods.map((good) => (
          <GoodItem
            handleAddProduct={handleAddProduct}
            key={good.id}
            good={good}
          ></GoodItem>
        ))}
      </StyledList>
    </StyledWrapper>
  );
};
