import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (foodId) => {
    setCartItems([...cartItems, foodId]);
  };
  const removeFromCart = (foodId) => {
    setCartItems(cartItems.filter((food) => food.id !== foodId));
  };

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
