export const editCard = ({ cartItems, newProduct, action }) => {
  const productExist = cartItems.find((item) => item.id === newProduct.id);

  switch (action) {
    case "add":
      if (productExist) {
        return cartItems.map((item) =>
          item.id === newProduct.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        );
      } else {
        return [
          ...cartItems,
          {
            ...newProduct,
            quantity: 1,
          },
        ];
      }
    case "decrement":
      if (!productExist) {
        return cartItems;
      }
      if (productExist.quantity > 1) {
        return cartItems.map((item) =>
          item.id === newProduct.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        );
      } else {
        return cartItems.filter((item) => item.id !== newProduct.id);
      }

    case "delete":
      return cartItems.filter((item) => item.id !== newProduct.id);
    default:
      return cartItems;
  }
};
