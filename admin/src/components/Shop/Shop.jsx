import React, { useState, useEffect } from 'react';
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Eye, 
  Filter,
  ChevronLeft,
  ChevronRight,
  Package,
  ShoppingBag,
  Users,
  Settings,
  LogOut,
  X,
  Upload,
  Star
} from 'lucide-react';

// Mock API functions (replace with actual Axios calls)
const api = {
  async getProducts(page = 1, limit = 10, search = '', category = '') {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Mock data
    const mockProducts = [
      {
        id: 1,
        name: "School Uniform Shirt",
        description: "Premium quality cotton school shirt",
        category: "Uniforms",
        price: 25.99,
        stock: 150,
        images: ["shirt1.jpg"],
        sizes: ["S", "M", "L", "XL"],
        featured: true,
        isActive: true,
        createdAt: "2025-05-15T10:00:00Z"
      },
      {
        id: 2,
        name: "Scientific Calculator",
        description: "Advanced scientific calculator for mathematics",
        category: "Stationery",
        price: 45.50,
        stock: 75,
        images: ["calc1.jpg"],
        sizes: [],
        featured: false,
        isActive: true,
        createdAt: "2025-05-14T14:30:00Z"
      },
      {
        id: 3,
        name: "School Backpack",
        description: "Durable and spacious school backpack",
        category: "Accessories",
        price: 35.00,
        stock: 0,
        images: ["backpack1.jpg"],
        sizes: ["One Size"],
        featured: true,
        isActive: true,
        createdAt: "2025-05-13T09:15:00Z"
      }
    ];

    // Filter by search and category
    let filtered = mockProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) ||
                          product.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = !category || product.category === category;
      return matchesSearch && matchesCategory;
    });

    const total = filtered.length;
    const startIndex = (page - 1) * limit;
    const paginatedProducts = filtered.slice(startIndex, startIndex + limit);

    return {
      products: paginatedProducts,
      total,
      page,
      totalPages: Math.ceil(total / limit)
    };
  },

  async getProduct(id) {
    await new Promise(resolve => setTimeout(resolve, 300));
    return {
      id,
      name: "School Uniform Shirt",
      description: "Premium quality cotton school shirt",
      category: "Uniforms",
      price: 25.99,
      stock: 150,
      images: ["shirt1.jpg"],
      sizes: ["S", "M", "L", "XL"],
      featured: true,
      isActive: true
    };
  },

  async createProduct(productData) {
    await new Promise(resolve => setTimeout(resolve, 800));
    return { id: Date.now(), ...productData };
  },

  async updateProduct(id, productData) {
    await new Promise(resolve => setTimeout(resolve, 800));
    return { id, ...productData };
  },

  async deleteProduct(id) {
    await new Promise(resolve => setTimeout(resolve, 500));
    return { success: true };
  }
};

const categories = ["Uniforms", "Stationery", "Accessories", "Books", "Sports"];

function ProductForm({ product, onSave, onCancel, isLoading }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
    stock: '',
    images: [],
    sizes: [],
    featured: false,
    ...product
  });

  const [newSize, setNewSize] = useState('');

  const handleSubmit = () => {
    if (formData.name && formData.category && formData.price && formData.stock) {
      onSave(formData);
    }
  };

  const addSize = () => {
    if (newSize && !formData.sizes.includes(newSize)) {
      setFormData(prev => ({
        ...prev,
        sizes: [...prev.sizes, newSize]
      }));
      setNewSize('');
    }
  };

  const removeSize = (size) => {
    setFormData(prev => ({
      ...prev,
      sizes: prev.sizes.filter(s => s !== size)
    }));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addSize();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">
            {product ? 'Edit Product' : 'Add New Product'}
          </h2>
          <button onClick={onCancel} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.category}
                onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
              >
                <option value="">Select Category</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price ($)
              </label>
              <input
                type="number"
                step="0.01"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.price}
                onChange={(e) => setFormData(prev => ({ ...prev, price: parseFloat(e.target.value) || '' }))}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Stock Quantity
              </label>
              <input
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.stock}
                onChange={(e) => setFormData(prev => ({ ...prev, stock: parseInt(e.target.value) || '' }))}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sizes
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                placeholder="Add size (e.g., S, M, L)"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={newSize}
                onChange={(e) => setNewSize(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button
                type="button"
                onClick={addSize}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.sizes.map(size => (
                <span
                  key={size}
                  className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                >
                  {size}
                  <button
                    type="button"
                    onClick={() => removeSize(size)}
                    className="ml-2 text-gray-500 hover:text-gray-700"
                  >
                    <X size={14} />
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="featured"
              className="mr-2"
              checked={formData.featured}
              onChange={(e) => setFormData(prev => ({ ...prev, featured: e.target.checked }))}
            />
            <label htmlFor="featured" className="text-sm font-medium text-gray-700">
              Featured Product
            </label>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={isLoading || !formData.name || !formData.category || !formData.price || !formData.stock}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              {isLoading ? 'Saving...' : 'Save Product'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductTable({ products, onEdit, onDelete, onView }) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="min-w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Product
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Stock
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products.map((product) => (
            <tr key={product.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <div className="h-10 w-10 rounded-lg bg-gray-200 flex items-center justify-center">
                      <Package size={20} className="text-gray-500" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900 flex items-center">
                      {product.name}
                      {product.featured && <Star size={14} className="ml-2 text-yellow-500 fill-current" />}
                    </div>
                    <div className="text-sm text-gray-500 truncate max-w-xs">
                      {product.description}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {product.category}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                ${product.price.toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <span className={`inline-flex px-2 py-1 text-xs rounded-full ${
                  product.stock > 0 
                    ? product.stock > 20 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {product.stock > 0 ? `${product.stock} units` : 'Out of stock'}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                  product.isActive 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {product.isActive ? 'Active' : 'Inactive'}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div className="flex space-x-2">
                  <button
                    onClick={() => onView(product)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    <Eye size={16} />
                  </button>
                  <button
                    onClick={() => onEdit(product)}
                    className="text-green-600 hover:text-green-900"
                  >
                    <Edit size={16} />
                  </button>
                  <button
                    onClick={() => onDelete(product)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Sidebar({ currentView, onViewChange }) {
  const menuItems = [
    { id: 'products', label: 'Products', icon: Package },
    { id: 'orders', label: 'Orders', icon: ShoppingBag },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="bg-slate-800 text-white w-64 min-h-screen flex flex-col">

      <nav className="flex-1 px-4 mt-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                currentView === item.id
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-4">
        <button className="w-full flex items-center space-x-3 px-4 py-3 text-slate-300 hover:bg-slate-700 hover:text-white rounded-lg transition-colors">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}

function SchoolShopAdmin() {
  const [currentView, setCurrentView] = useState('products');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formLoading, setFormLoading] = useState(false);
  
  // Filters and pagination
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const loadProducts = async () => {
    setLoading(true);
    try {
      const response = await api.getProducts(currentPage, 10, searchTerm, selectedCategory);
      setProducts(response.products);
      setTotalPages(response.totalPages);
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (currentView === 'products') {
      loadProducts();
    }
  }, [currentView, currentPage, searchTerm, selectedCategory]);

  const handleCreateProduct = () => {
    setEditingProduct(null);
    setShowForm(true);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleSaveProduct = async (productData) => {
    setFormLoading(true);
    try {
      if (editingProduct) {
        await api.updateProduct(editingProduct.id, productData);
      } else {
        await api.createProduct(productData);
      }
      setShowForm(false);
      setEditingProduct(null);
      loadProducts();
    } catch (error) {
      console.error('Error saving product:', error);
    } finally {
      setFormLoading(false);
    }
  };

  const handleDeleteProduct = async (product) => {
    if (window.confirm(`Are you sure you want to delete "${product.name}"?`)) {
      try {
        await api.deleteProduct(product.id);
        loadProducts();
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };

  const handleViewProduct = (product) => {
    console.log('View product:', product);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                {currentView === 'products' ? 'All Products' : 'Dashboard'}
              </h1>
              <p className="text-gray-600 mt-1">Welcome, Admin</p>
            </div>
            
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          {currentView === 'products' && (
            <div className="space-y-6">
              {/* Filters and Actions */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 flex-1">
                  <div className="relative">
                    <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search products..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-64"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  
                  <select
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value="">All Categories</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                
                <button
                  onClick={handleCreateProduct}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Plus size={20} />
                  <span>Add Product</span>
                </button>
              </div>

              {/* Products Table */}
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="text-gray-500">Loading products...</div>
                </div>
              ) : products.length > 0 ? (
                <>
                  <ProductTable
                    products={products}
                    onEdit={handleEditProduct}
                    onDelete={handleDeleteProduct}
                    onView={handleViewProduct}
                  />
                  
                  {/* Pagination */}
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-700">
                      Showing page {currentPage} of {totalPages}
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="flex items-center px-3 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                      >
                        <ChevronLeft size={16} />
                        Previous
                      </button>
                      <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="flex items-center px-3 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                      >
                        Next
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <Package size={48} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                  <p className="text-gray-500 mb-4">Get started by adding your first product.</p>
                  <button
                    onClick={handleCreateProduct}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mx-auto"
                  >
                    <Plus size={20} />
                    <span>Add Product</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {currentView !== 'products' && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {currentView.charAt(0).toUpperCase() + currentView.slice(1)} Section
              </h3>
              <p className="text-gray-500">This section is coming soon.</p>
            </div>
          )}
        </main>
      </div>

      {/* Product Form Modal */}
      {showForm && (
        <ProductForm
          product={editingProduct}
          onSave={handleSaveProduct}
          onCancel={() => {
            setShowForm(false);
            setEditingProduct(null);
          }}
          isLoading={formLoading}
        />
      )}
    </div>
  );
}

export default SchoolShopAdmin;