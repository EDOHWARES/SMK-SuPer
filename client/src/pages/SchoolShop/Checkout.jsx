"use client"

import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { AuthContext } from "../../context/AuthContext"
// import api from "../utils/api"
import { CreditCard, MapPin, User, ShoppingBag, CheckCircle } from "lucide-react"

const Checkout = () => {
  const navigate = useNavigate()
  const { cart, clearCart } = useContext(CartContext)
  const { user } = useContext(AuthContext)

  const [loading, setLoading] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [orderNumber, setOrderNumber] = useState("")

  const [formData, setFormData] = useState({
    customerInfo: {
      name: user?.name || "",
      email: user?.email || "",
      phone: user?.phone || "",
    },
    deliveryMethod: "pickup",
    deliveryAddress: {
      street: "",
      city: "",
      postalCode: "",
      notes: "",
    },
    paymentMethod: "bank_transfer",
  })

  // Calculate totals
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const deliveryFee = formData.deliveryMethod === "delivery" ? 15000 : 0
  const total = subtotal + deliveryFee

  const handleInputChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Prepare order data
      const orderData = {
        items: cart.map((item) => ({
          productId: item._id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          size: item.size || null,
        })),
        customer: formData.customerInfo,
        deliveryMethod: formData.deliveryMethod,
        deliveryAddress: formData.deliveryMethod === "delivery" ? formData.deliveryAddress : null,
        paymentMethod: formData.paymentMethod,
        subtotal,
        deliveryFee,
        total,
      }

      // Create order
    //   const response = await api.post("/orders", orderData)

      if (response.data.success) {
        setOrderNumber(response.data.order.orderNumber)
        setOrderPlaced(true)
        clearCart()

        // Handle payment based on method
        if (formData.paymentMethod === "e_wallet") {
          // Redirect to payment gateway
        //   handlePaymentGateway(response.data.order._id)
        }
      }
    } catch (error) {
      console.error("Order creation error:", error)
      alert("Failed to place order. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handlePaymentGateway = async (orderId) => {
    try {
      // Create payment session
      const response = await api.post("/payments/create", {
        orderId,
        amount: total,
        customerInfo: formData.customerInfo,
      })

      if (response.data.paymentUrl) {
        // Redirect to payment gateway
        window.location.href = response.data.paymentUrl
      }
    } catch (error) {
      console.error("Payment gateway error:", error)
      alert("Payment setup failed. Please contact support.")
    }
  }

  if (cart.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-600 mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-6">Add some products to proceed to checkout</p>
          <button
            onClick={() => navigate("/school-store")}
            className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg"
          >
            Browse Products
          </button>
        </div>
      </div>
    )
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Placed Successfully!</h2>
          <p className="text-gray-600 mb-4">Your order number is:</p>
          <p className="text-xl font-bold text-blue-900 mb-6">{orderNumber}</p>

          {formData.paymentMethod === "bank_transfer" && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-yellow-800 mb-2">Payment Instructions</h3>
              <p className="text-sm text-yellow-700">
                Please transfer Rp {total.toLocaleString("id-ID")} to:
                <br />
                <strong>Bank BCA: 1234567890</strong>
                <br />
                Account Name: Koperasi Sekolah
                <br />
                Reference: {orderNumber}
              </p>
            </div>
          )}

          <div className="space-y-3">
            <button
              onClick={() => navigate("/orders")}
              className="w-full bg-blue-900 hover:bg-blue-800 text-white py-2 px-4 rounded-lg"
            >
              View My Orders
            </button>
            <button
              onClick={() => navigate("/school-store")}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-lg"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-blue-900">Checkout</h1>
          <p className="text-gray-600">Complete your order</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Customer Information */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Customer Information
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.customerInfo.name}
                      onChange={(e) => handleInputChange("customerInfo", "name", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.customerInfo.email}
                      onChange={(e) => handleInputChange("customerInfo", "email", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.customerInfo.phone}
                      onChange={(e) => handleInputChange("customerInfo", "phone", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
              </div>

              {/* Delivery Method */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Delivery Method
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      id="pickup"
                      name="deliveryMethod"
                      value="pickup"
                      checked={formData.deliveryMethod === "pickup"}
                      onChange={(e) => setFormData((prev) => ({ ...prev, deliveryMethod: e.target.value }))}
                      className="mr-3"
                    />
                    <label htmlFor="pickup" className="flex-1 cursor-pointer">
                      <div>
                        <p className="font-semibold">School Pickup</p>
                        <p className="text-sm text-gray-600">Pick up your order at the school store</p>
                        <p className="text-sm font-semibold text-green-600">Free</p>
                      </div>
                    </label>
                  </div>

                  <div className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      id="delivery"
                      name="deliveryMethod"
                      value="delivery"
                      checked={formData.deliveryMethod === "delivery"}
                      onChange={(e) => setFormData((prev) => ({ ...prev, deliveryMethod: e.target.value }))}
                      className="mr-3"
                    />
                    <label htmlFor="delivery" className="flex-1 cursor-pointer">
                      <div>
                        <p className="font-semibold">Home Delivery</p>
                        <p className="text-sm text-gray-600">Get your order delivered to your address</p>
                        <p className="text-sm font-semibold text-blue-600">Rp 15,000</p>
                      </div>
                    </label>
                  </div>
                </div>

                {formData.deliveryMethod === "delivery" && (
                  <div className="mt-6 space-y-4">
                    <h3 className="font-semibold">Delivery Address</h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Street Address *</label>
                      <textarea
                        required
                        value={formData.deliveryAddress.street}
                        onChange={(e) => handleInputChange("deliveryAddress", "street", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                        rows="3"
                        placeholder="Enter your street address"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                        <input
                          type="text"
                          required
                          value={formData.deliveryAddress.city}
                          onChange={(e) => handleInputChange("deliveryAddress", "city", e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                          placeholder="Enter your city"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code *</label>
                        <input
                          type="text"
                          required
                          value={formData.deliveryAddress.postalCode}
                          onChange={(e) => handleInputChange("deliveryAddress", "postalCode", e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                          placeholder="Enter postal code"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Notes (Optional)</label>
                      <textarea
                        value={formData.deliveryAddress.notes}
                        onChange={(e) => handleInputChange("deliveryAddress", "notes", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                        rows="2"
                        placeholder="Any special delivery instructions"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Payment Method
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      id="bank_transfer"
                      name="paymentMethod"
                      value="bank_transfer"
                      checked={formData.paymentMethod === "bank_transfer"}
                      onChange={(e) => setFormData((prev) => ({ ...prev, paymentMethod: e.target.value }))}
                      className="mr-3"
                    />
                    <label htmlFor="bank_transfer" className="flex-1 cursor-pointer">
                      <div>
                        <p className="font-semibold">Bank Transfer</p>
                        <p className="text-sm text-gray-600">Transfer to school bank account</p>
                      </div>
                    </label>
                  </div>

                  <div className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      id="cash_on_delivery"
                      name="paymentMethod"
                      value="cash_on_delivery"
                      checked={formData.paymentMethod === "cash_on_delivery"}
                      onChange={(e) => setFormData((prev) => ({ ...prev, paymentMethod: e.target.value }))}
                      className="mr-3"
                    />
                    <label htmlFor="cash_on_delivery" className="flex-1 cursor-pointer">
                      <div>
                        <p className="font-semibold">Cash on Delivery</p>
                        <p className="text-sm text-gray-600">Pay when you receive your order</p>
                      </div>
                    </label>
                  </div>

                  <div className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      id="e_wallet"
                      name="paymentMethod"
                      value="e_wallet"
                      checked={formData.paymentMethod === "e_wallet"}
                      onChange={(e) => setFormData((prev) => ({ ...prev, paymentMethod: e.target.value }))}
                      className="mr-3"
                    />
                    <label htmlFor="e_wallet" className="flex-1 cursor-pointer">
                      <div>
                        <p className="font-semibold">E-Wallet</p>
                        <p className="text-sm text-gray-600">Pay with GoPay, OVO, or DANA</p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Processing..." : `Place Order - Rp ${total.toLocaleString("id-ID")}`}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">Order Summary</h2>

              {/* Order Items */}
              <div className="space-y-3 mb-4">
                {cart.map((item) => (
                  <div key={`${item._id}-${item.size || "default"}`} className="flex justify-between items-start">
                    <div className="flex-1">
                      <p className="font-medium text-sm">{item.name}</p>
                      {item.size && <p className="text-xs text-gray-600">Size: {item.size}</p>}
                      <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-semibold">Rp {(item.price * item.quantity).toLocaleString("id-ID")}</p>
                  </div>
                ))}
              </div>

              <hr className="my-4" />

              {/* Totals */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>Rp {subtotal.toLocaleString("id-ID")}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span>{deliveryFee === 0 ? "Free" : `Rp ${deliveryFee.toLocaleString("id-ID")}`}</span>
                </div>
                <hr />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-blue-900">Rp {total.toLocaleString("id-ID")}</span>
                </div>
              </div>

              <div className="mt-6 text-center text-xs text-gray-600">
                <p>By placing this order, you agree to our</p>
                <p>Terms of Service and Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
