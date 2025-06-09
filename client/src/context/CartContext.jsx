import React, { createContext, useReducer } from "react";

// Initial state for the cart
const initialState = {
  cart: [],
};

// Reducer function to manage cart actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // Check if the item already exists in the cart
      const existingItemIndex = state.cart.findIndex(
        (item) => item._id === action.payload._id && item.size === action.payload.size
      );

      if (existingItemIndex >= 0) {
        // Update the quantity of the existing item
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex].quantity += action.payload.quantity;
        return { ...state, cart: updatedCart };
      }

      // Add new item to the cart
      return { ...state, cart: [...state.cart, action.payload] };

    case "REMOVE_FROM_CART":
      // Remove item from the cart
      return {
        ...state,
        cart: state.cart.filter(
          (item) => item._id !== action.payload._id || item.size !== action.payload.size
        ),
      };

    case "CLEAR_CART":
      // Clear the entire cart
      return { ...state, cart: [] };

    default:
      return state;
  }
};

// Create the CartContext
export const CartContext = createContext();

// CartProvider component to wrap the app
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Cart actions
  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const removeFromCart = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;