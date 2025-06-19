import express from "express";
import Product from "../../models/store_models/product.js";
import { auth, roleCheck } from "../../middleware/auth.js";

const productRoutes = express.Router();

// Get all products with filtering and pagination
productRoutes.get("/", async (req, res) => {
  try {
    const {
      category,
      search,
      featured,
      page = 1,
      limit = 12,
      sortBy = "createdAt",
      sortOrder = "desc",
    } = req.query;

    // Build query
    const query = { isActive: true };

    if (category && category !== "all") {
      query.category = category;
    }

    if (featured === "true") {
      query.featured = true;
    }

    if (search) {
      query.$text = { $search: search };
    }

    // Calculate pagination
    const skip = (Number.parseInt(page) - 1) * Number.parseInt(limit);

    // Build sort object
    const sort = {};
    sort[sortBy] = sortOrder === "desc" ? -1 : 1;

    // Execute query
    const products = await Product.find(query)
      .sort(sort)
      .skip(skip)
      .limit(Number.parseInt(limit));

    // Get total count for pagination
    const total = await Product.countDocuments(query);

    res.json({
      products,
      pagination: {
        currentPage: Number.parseInt(page),
        totalPages: Math.ceil(total / Number.parseInt(limit)),
        totalProducts: total,
        hasNext: skip + products.length < total,
        hasPrev: Number.parseInt(page) > 1,
      },
    });
  } catch (error) {
    console.error("Get products error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Get single product by ID
productRoutes.get("/:id", async (req, res) => {
  try {
    const product = await Product.findOne({
      _id: req.params.id,
      isActive: true,
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    console.error("Get product error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Get product categories
productRoutes.get("/meta/categories", async (req, res) => {
  try {
    const categories = await Product.distinct("category", { isActive: true });
    res.json(categories);
  } catch (error) {
    console.error("Get categories error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Create new product (Admin only)
productRoutes.post(
  "/",
  auth,
  roleCheck("school_admin", "room_supervisor", "principal"),
  async (req, res) => {
    try {
      const {
        name,
        description,
        category,
        price,
        stock,
        images,
        sizes,
        featured,
      } = req.body;

      const product = new Product({
        name,
        description,
        category,
        price,
        stock,
        images: images || [],
        sizes: sizes || [],
        featured: featured || false,
      });

      await product.save();

      res.status(201).json({
        message: "Product created successfully",
        product,
      });
    } catch (error) {
      console.error("Create product error:", error);

      if (error.name === "ValidationError") {
        const errors = Object.values(error.errors).map((err) => err.message);
        return res.status(400).json({ message: "Validation error", errors });
      }

      res.status(500).json({ message: "Internal server error" });
    }
  }
);

// Update product (Admin only)
productRoutes.put(
  "/:id",
  auth,
  roleCheck("school_admin", "room_supervisor", "principal"),
  async (req, res) => {
    try {
      const {
        name,
        description,
        category,
        price,
        stock,
        images,
        sizes,
        featured,
        isActive,
      } = req.body;

      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      // Update fields
      if (name !== undefined) product.name = name;
      if (description !== undefined) product.description = description;
      if (category !== undefined) product.category = category;
      if (price !== undefined) product.price = price;
      if (stock !== undefined) product.stock = stock;
      if (images !== undefined) product.images = images;
      if (sizes !== undefined) product.sizes = sizes;
      if (featured !== undefined) product.featured = featured;
      if (isActive !== undefined) product.isActive = isActive;

      await product.save();

      res.json({
        message: "Product updated successfully",
        product,
      });
    } catch (error) {
      console.error("Update product error:", error);

      if (error.name === "ValidationError") {
        const errors = Object.values(error.errors).map((err) => err.message);
        return res.status(400).json({ message: "Validation error", errors });
      }

      res.status(500).json({ message: "Internal server error" });
    }
  }
);

// Delete product (Admin only)
productRoutes.delete(
  "/:id",
  auth,
  roleCheck("school_admin", "room_supervisor", "principal"),
  async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      // Soft delete by setting isActive to false
      product.isActive = false;
      await product.save();

      res.json({ message: "Product deleted successfully" });
    } catch (error) {
      console.error("Delete product error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

// Update product stock (Admin only)
productRoutes.patch(
  "/:id/stock",
  auth,
  roleCheck("school_admin", "room_supervisor", "principal"),
  async (req, res) => {
    try {
      const { stock } = req.body;

      if (stock < 0) {
        return res.status(400).json({ message: "Stock cannot be negative" });
      }

      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      product.stock = stock;
      await product.save();

      res.json({
        message: "Stock updated successfully",
        product,
      });
    } catch (error) {
      console.error("Update stock error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

export default productRoutes;
