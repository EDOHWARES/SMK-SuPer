"use client"

import React, { useState } from "react"
import { ChevronDown, ChevronUp, Eye } from "lucide-react"

const OrderTable = ({ orders, onUpdateStatus }) => {
  const [sortField, setSortField] = useState("createdAt")
  const [sortDirection, setSortDirection] = useState("desc")
  const [expandedOrder, setExpandedOrder] = useState(null)

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  // Sort orders
  const sortedOrders = [...orders].sort((a, b) => {
    let comparison = 0

    if (sortField === "orderNumber") {
      comparison = a.orderNumber.localeCompare(b.orderNumber)
    } else if (sortField === "customerName") {
      comparison = a.customer.name.localeCompare(b.customer.name)
    } else if (sortField === "total") {
      comparison = a.total - b.total
    } else if (sortField === "status") {
      comparison = a.status.localeCompare(b.status)
    } else if (sortField === "createdAt") {
      comparison = new Date(a.createdAt) - new Date(b.createdAt)
    }

    return sortDirection === "asc" ? comparison : -comparison
  })

  // Render sort icon
  const renderSortIcon = (field) => {
    if (sortField !== field) return null

    return sortDirection === "asc" ? (
      <ChevronUp size={16} className="inline ml-1" />
    ) : (
      <ChevronDown size={16} className="inline ml-1" />
    )
  }

  // Get status badge color
  const getStatusBadgeColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "processing":
        return "bg-blue-100 text-blue-800"
      case "shipped":
        return "bg-purple-100 text-purple-800"
      case "delivered":
        return "bg-green-100 text-green-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort("orderNumber")}
            >
              Order # {renderSortIcon("orderNumber")}
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort("customerName")}
            >
              Customer {renderSortIcon("customerName")}
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort("total")}
            >
              Total {renderSortIcon("total")}
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort("status")}
            >
              Status {renderSortIcon("status")}
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort("createdAt")}
            >
              Date {renderSortIcon("createdAt")}
            </th>
            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {sortedOrders.length === 0 ? (
            <tr>
              <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
                No orders found
              </td>
            </tr>
          ) : (
            sortedOrders.map((order) => (
              <React.Fragment key={order._id}>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-900">{order.orderNumber}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.customer.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    Rp {order.total.toLocaleString("id-ID")}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select
                      value={order.status}
                      onChange={(e) => onUpdateStatus(order._id, e.target.value)}
                      className={`text-xs font-semibold rounded px-2 py-1 border ${getStatusBadgeColor(order.status)}`}
                    >
                      <option value="pending">Pending</option>
                      <option value="processing">Processing</option>
                      <option value="shipped">Shipped</option>
                      <option value="delivered">Delivered</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => setExpandedOrder(expandedOrder === order._id ? null : order._id)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <Eye size={18} />
                    </button>
                  </td>
                </tr>
                {expandedOrder === order._id && (
                  <tr>
                    <td colSpan="6" className="px-6 py-4 bg-gray-50">
                      <div className="border-t border-b border-gray-200 py-4">
                        <h4 className="font-medium text-gray-900 mb-2">Order Details</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="text-sm font-medium text-gray-700 mb-1">Customer Information</h5>
                            <p className="text-sm text-gray-600">{order.customer.name}</p>
                            <p className="text-sm text-gray-600">{order.customer.email}</p>
                            <p className="text-sm text-gray-600">{order.customer.phone}</p>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium text-gray-700 mb-1">Delivery Information</h5>
                            <p className="text-sm text-gray-600">Method: {order.deliveryMethod}</p>
                            {order.deliveryMethod === "delivery" && order.deliveryAddress && (
                              <p className="text-sm text-gray-600">
                                Address: {order.deliveryAddress.street}, {order.deliveryAddress.city},{" "}
                                {order.deliveryAddress.postalCode}
                              </p>
                            )}
                          </div>
                        </div>

                        <h5 className="text-sm font-medium text-gray-700 mt-4 mb-2">Items</h5>
                        <div className="overflow-x-auto">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-100">
                              <tr>
                                <th
                                  scope="col"
                                  className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Product
                                </th>
                                <th
                                  scope="col"
                                  className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Price
                                </th>
                                <th
                                  scope="col"
                                  className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Quantity
                                </th>
                                <th
                                  scope="col"
                                  className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Subtotal
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                              {order.items.map((item, index) => (
                                <tr key={index}>
                                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                                    {item.name}
                                    {item.size && (
                                      <span className="text-gray-500 text-xs ml-1">(Size: {item.size})</span>
                                    )}
                                  </td>
                                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                                    Rp {item.price.toLocaleString("id-ID")}
                                  </td>
                                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{item.quantity}</td>
                                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900 text-right">
                                    Rp {(item.price * item.quantity).toLocaleString("id-ID")}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                            <tfoot>
                              <tr>
                                <td colSpan="3" className="px-4 py-2 text-sm font-medium text-gray-900 text-right">
                                  Subtotal
                                </td>
                                <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900 text-right">
                                  Rp {order.subtotal.toLocaleString("id-ID")}
                                </td>
                              </tr>
                              <tr>
                                <td colSpan="3" className="px-4 py-2 text-sm font-medium text-gray-900 text-right">
                                  Delivery Fee
                                </td>
                                <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900 text-right">
                                  Rp {order.deliveryFee.toLocaleString("id-ID")}
                                </td>
                              </tr>
                              {order.discount > 0 && (
                                <tr>
                                  <td colSpan="3" className="px-4 py-2 text-sm font-medium text-green-600 text-right">
                                    Discount
                                  </td>
                                  <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-green-600 text-right">
                                    -Rp {order.discount.toLocaleString("id-ID")}
                                  </td>
                                </tr>
                              )}
                              <tr>
                                <td colSpan="3" className="px-4 py-2 text-base font-bold text-blue-900 text-right">
                                  Total
                                </td>
                                <td className="px-4 py-2 whitespace-nowrap text-base font-bold text-blue-900 text-right">
                                  Rp {order.total.toLocaleString("id-ID")}
                                </td>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default OrderTable
