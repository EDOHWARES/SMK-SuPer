"use client"

import { useState } from "react"
import { ShoppingCart, Heart } from "lucide-react"

const ProductCard = ({ product, addToCart }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : null)
  const [isHovered, setIsHovered] = useState(false)

  const handleAddToCart = () => {
    addToCart({
      ...product,
      selectedSize,
    })
  }

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image || "/images/placeholder-product.jpg"}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 transform-gpu"
          style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
        />

        {/* Out of Stock Overlay */}
        {product.stock <= 0 && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Out of Stock</span>
          </div>
        )}

        {/* Wishlist Button */}
        <button
          className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow hover:bg-gray-100"
          aria-label="Add to wishlist"
        >
          <Heart size={18} className="text-gray-500 hover:text-red-500" />
        </button>

        {/* Category Badge */}
        <div className="absolute bottom-2 left-2">
          <span className="bg-blue-900 text-yellow-400 text-xs font-semibold px-2.5 py-1 rounded">
            {product.category}
          </span>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>

        {/* Price */}
        <div className="text-xl font-bold text-blue-900 mb-3">Rp {product.price.toLocaleString("id-ID")}</div>

        {/* Size Selector (if applicable) */}
        {product.sizes && product.sizes.length > 0 && (
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">Size</label>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-2 py-1 text-xs border rounded-md transition-colors ${
                    selectedSize === size
                      ? "bg-blue-900 text-white border-blue-900"
                      : "bg-white text-gray-700 border-gray-300 hover:border-blue-900"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={product.stock <= 0}
          className={`w-full flex items-center justify-center gap-2 py-2 px-4 rounded-md transition-colors ${
            product.stock > 0
              ? "bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          <ShoppingCart size={18} />
          {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </div>
  )
}

export default ProductCard
