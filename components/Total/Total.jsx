import React, { useState, useEffect, useContext } from "react";
import {
  StyledPrice,
  StyledSubmit,
  StyledText,
  StyledTotal,
} from "./Total.styled";
import { CartContext } from "../../lib/context";

export const Total = ({ form }) => {
  const { cartItems } = useContext(CartContext);

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const total = cartItems.reduce((acc, item) => {
    const sum = Number(item.price) * item.quantity;
    return acc + sum;
  }, 0);

  const handleSubmit = async (data) => {
    try {
      await fetch("/api/order", {
        method: "POST",
        body: JSON.stringify({ ...data, items: cartItems }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      form.reset();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <StyledTotal>
      <StyledText>Total price:</StyledText>
      <StyledPrice>
        {domLoaded ? total : 0}
        <span> USD</span>
      </StyledPrice>
      <StyledSubmit
        onClick={form.handleSubmit(handleSubmit)}
        disabled={!form.formState.isValid}
      >
        Submit
      </StyledSubmit>
    </StyledTotal>
  );
};
