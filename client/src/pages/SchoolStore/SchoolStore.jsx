import { useState, useEffect } from "react";
import axios from "axios";

import ProductCard from "../../components/Store/ProductCard";
import CategoryFilter from "../../components/Store/CategoryFilter";
import CartSidebar from "../../components/Store/CartSidebar";
import SearchBar from "../../components/Store/SearchBar";

const SchoolStore = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  console.log(filteredProducts);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch products from API
  useEffect(() => {
    const api_url = import.meta.env.VITE_API_URL;
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${api_url}/products`);
        console.log("API Response:", response.data); // Log the response
        setProducts(response.data.products) || [];
        setFilteredProducts(response.data.products) || [];

        // Extract unique categories
        const uniqueCategories = [
          ...new Set(response.data.products.map((product) => product.category)),
        ];
        setCategories(uniqueCategories);

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on category and search query
  useEffect(() => {
    let result = products;

    // Filter by category
    if (selectedCategory !== "all") {
      result = result.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
      );
    }

    setFilteredProducts(result);
  }, [selectedCategory, searchQuery, products]);

  // Add to cart function
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Check if product already exists in cart
      const existingItem = prevCart.find(
        (item) => item._id === product._id && item.size === product.selectedSize
      );

      if (existingItem) {
        // Update quantity if product exists
        return prevCart.map((item) =>
          item._id === product._id && item.size === product.selectedSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new product to cart
        return [
          ...prevCart,
          {
            ...product,
            quantity: 1,
            size: product.selectedSize || null,
          },
        ];
      }
    });

    // Open cart sidebar
    setIsCartOpen(true);
  };

  // Remove from cart function
  const removeFromCart = (productId, size) => {
    setCart((prevCart) =>
      prevCart.filter((item) => !(item._id === productId && item.size === size))
    );
  };

  // Update cart item quantity
  const updateQuantity = (productId, size, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId, size);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === productId && item.size === size
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:w-1/2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                School Store{" "}
                <span className="text-yellow-400">(Koperasi Sekolah)</span>
              </h1>
              <p className="text-lg md:text-xl mb-6 text-blue-100">
                Your one-stop shop for school uniforms, books, and supplies.
                Shop online and pick up at school or have items delivered.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() =>
                    document
                      .getElementById("products-section")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-lg transition duration-300"
                >
                  Browse Products
                </button>
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="bg-transparent hover:bg-blue-700 text-white border border-white font-bold py-3 px-6 rounded-lg transition duration-300"
                >
                  View Cart
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center text-[10rem] hover:scale-110 duration-500">
              🛍️
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8" id="products-section">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="md:w-1/4 lg:w-1/5">
            <div className="bg-white rounded-lg shadow p-4 mb-6">
              <h2 className="text-xl font-bold text-blue-900 mb-4">
                Categories
              </h2>
              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            </div>

            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-xl font-bold text-blue-900 mb-4">
                User Type
              </h2>
              <div className="space-y-2">
                <div className="flex items-center p-2 rounded-md hover:bg-gray-100">
                  <input
                    type="radio"
                    id="student"
                    name="userType"
                    className="mr-2"
                    defaultChecked
                  />
                  <label htmlFor="student" className="cursor-pointer w-full">
                    Student
                  </label>
                </div>
                <div className="flex items-center p-2 rounded-md hover:bg-gray-100">
                  <input
                    type="radio"
                    id="parent"
                    name="userType"
                    className="mr-2"
                  />
                  <label htmlFor="parent" className="cursor-pointer w-full">
                    Parent
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="md:w-3/4 lg:w-4/5">
            <div className="mb-6">
              <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            </div>

            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-900"></div>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="bg-white rounded-lg shadow p-8 text-center">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  No products found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product._id}
                    product={product}
                    addToCart={addToCart}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Cart Sidebar */}
      <CartSidebar
        isOpen={isCartOpen}
        setIsOpen={setIsCartOpen}
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />
    </div>
  );
};

export default SchoolStore;
