import { createContext, useEffect, useState } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";

export const CartContext = createContext(null);

export default function Context({ children }) {
  const [cartItems, setCartItems] = useLocalStorage("cart", []);
  const [chosenShop, setChosenShop] = useState(null);

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCartItems([]);
  };
  useEffect(() => {
    if (!cartItems.length && !chosenShop) return;
    if (!cartItems.length) {
      setChosenShop(null);
      return;
    }

    setChosenShop(cartItems[0].shop);
  }, [cartItems, chosenShop]);
  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, chosenShop, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
