import React, { useEffect, useState, useContext } from "react";
import { StyledList, StyledWrapper } from "./MainRight.styled";
import { CartItem } from "../CartItem/CartItem";
import { Total } from "../Total/Total";
import { editCard } from "../../helpers/cart";
import { CartContext } from "../../lib/context";

export const MainRight = ({ form }) => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const handleEditQuantity = (newProduct, action) => {
    const updatedCart = editCard({ cartItems, newProduct, action });
    setCartItems(updatedCart);
  };

  return (
    <StyledWrapper>
      <StyledList>
        {domLoaded &&
          cartItems.map((good) => (
            <CartItem
              handleEditQuantity={handleEditQuantity}
              key={good.id}
              good={good}
            ></CartItem>
          ))}
      </StyledList>
      <Total form={form} />
    </StyledWrapper>
  );
};
