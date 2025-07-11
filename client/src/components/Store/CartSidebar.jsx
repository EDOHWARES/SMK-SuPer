"use client";
import { useEffect, useState } from "react";
import { X, ShoppingBag, Plus, Minus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";

const api_url = import.meta.env.VITE_API_URL;

const CartSidebar = ({ isOpen, setIsOpen }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log("Cart content: ", cart);

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
      setCart(response.data.items || []);
    } catch (error) {
      console.error("Error fetching cart:", error);
    } finally {
      setLoading(false);
    }
  };

  // Add item to cart
  const addToCart = async (productId, size) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${api_url}/cart`,
        { productId, quantity: 1, size },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCart(response.data.items || []);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  // Update item quantity in cart
  const updateQuantity = async (productId, size, quantity) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `${api_url}/cart/${productId}`,
        { quantity, size },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCart(response.data.items || []);
    } catch (error) {
      console.error("Error updating cart item:", error);
    }
  };

  // Remove item from cart
  const removeFromCart = async (productId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(`${api_url}/cart/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCart(response.data.items || []);
    } catch (error) {
      console.error("Error removing cart item:", error);
    }
  };

  // Clear the entire cart
  const clearCart = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${api_url}/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCart([]);
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchCart();
    }
  }, [isOpen]);

  // Calculate cart totals
  const subtotal = cart.reduce((total, item) => {
    if (item.productId) {
      return total + item.productId.price * item.quantity;
    }
    return total;
  }, 0);

  const itemCount = cart.reduce((count, item) => {
    if (item.productId) {
      return count + item.quantity;
    }
    return count;
  }, 0);

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/70 bg-opacity-50 z-40" onClick={() => setIsOpen(false)}></div>}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-lg z-[9999] transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-blue-900 flex items-center">
            <ShoppingBag className="mr-2" size={24} />
            Your Cart ({itemCount})
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded-full hover:bg-gray-100"
            aria-label="Close cart"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4" style={{ maxHeight: "calc(100vh - 180px)" }}>
          {loading ? (
            <div className="flex justify-center items-center h-full">
              <p className="text-gray-500">Loading cart...</p>
            </div>
          ) : cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={64} className="text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Your cart is empty</h3>
              <p className="text-gray-500 mb-6">Add some products to get started!</p>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-lg"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item, index) => (
                item.productId && (
                  <div key={`${item.productId._id}-${item.size || "default"}-${index}`} className="flex border-b pb-4">
                    {/* Product Image */}
                    <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                      <img
                        src={item.productId.image || "/images/placeholder-product.jpg"}
                        alt={item.productId.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="ml-4 flex-1">
                      <h4 className="text-sm font-semibold text-gray-800">{item.productId.name}</h4>
                      {item.size && <p className="text-xs text-gray-600">Size: {item.size}</p>}
                      <p className="text-sm font-bold text-blue-900 mt-1">
                        Rp {item.productId.price}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center mt-2">
                        <button
                          onClick={() => updateQuantity(item.productId._id, item.size, item.quantity - 1)}
                          className="p-1 rounded-full border border-gray-300 hover:bg-gray-100"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="mx-2 w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.productId._id, item.size, item.quantity + 1)}
                          className="p-1 rounded-full border border-gray-300 hover:bg-gray-100"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeFromCart(item.productId._id)}
                          className="ml-auto p-1 text-red-500 hover:text-red-700"
                          aria-label="Remove item"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t p-4">
            <div className="flex justify-between mb-4">
              <span className="font-semibold">Subtotal</span>
              <span className="font-bold text-blue-900">Rp {subtotal.toLocaleString("id-ID")}</span>
            </div>
            <p className="text-xs text-gray-500 mb-4">Shipping and taxes calculated at checkout</p>
            <Link
              to="/checkout"
              className="block w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-4 rounded-lg text-center"
            >
              Checkout
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="block w-full text-blue-900 font-medium py-2 mt-2 text-center"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
