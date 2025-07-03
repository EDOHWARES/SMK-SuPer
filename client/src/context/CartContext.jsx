import React, { createContext, useReducer, useEffect, useState } from "react";
import axios from "axios";

// Initial state for the cart
const initialState = {
  cart: [],
};

// Reducer function to manage cart actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_CART":
      // Set the cart items fetched from the API
      return { ...state, cart: action.payload };

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
  const [loading, setLoading] = useState(false);

  const api_url = import.meta.env.VITE_API_URL;

  // Fetch cart items from the API
  const fetchCart = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const response = await axios.get(`${api_url}/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({ type: "SET_CART", payload: response.data.items || [] });
    } catch (error) {
      console.error("Error fetching cart:", error);
    } finally {
      setLoading(false);
    }
  };

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

  // Fetch cart items when the component mounts
  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        loading,
        addToCart,
        removeFromCart,
        clearCart,
        fetchCart, // Expose fetchCart for manual refresh if needed
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;