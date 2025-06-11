import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import dotenv from "dotenv";
import { auth } from "../middleware/auth.js";
import { roleCheck } from "../middleware/auth.js";

dotenv.config();
const authRoutes = express.Router();

// Utility: Generate JWT
const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

// Fetch Profile Route
authRoutes.get("/profile", auth, async (req, res) => {
  try {
    // `req.user` is populated by the `auth` middleware
    const user = await User.findById(req.user.id).select("-password"); // Exclude the password field
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ user });
  } catch (err) {
    console.error("Error fetching profile:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// 🔐 Login Route for accessing the admin dahsboard
authRoutes.post("/admin/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || user.role !== "principal") {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const token = generateToken(user);
    res.json({ token, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// 🔐 Login Route (Shared for All)
authRoutes.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user)
    return res.status(400).json({ error: "Invalid email or password" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return res.status(400).json({ error: "Invalid email or password" });

  const token = generateToken(user);
  res.json({ token, user });
});

// 👨‍🎓 Signup Route (Teacher + JPN PPD Individual only)
authRoutes.post("/signup", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const allowedRoles = [
      "class_teacher",
      "regular_teacher",
      "jpn_ppd_individual",
    ];
    const userRole = role ? role.toLowerCase() : "student";

    if (!allowedRoles.includes(userRole)) {
      return res.status(400).json({ error: "Invalid role" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      role: userRole,
    });

    await user.save();
    const token = generateToken(user);

    res.status(201).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// 👑 Create Users (Admin/Principal only)
authRoutes.post(
  "/create-user",
  auth,
  roleCheck("principal"),
  async (req, res) => {
    try {
      const { name, email, password, role } = req.body;

      const allowedRoles = [
        "school_admin",
        "principal",
        "class_teacher",
        "regular_teacher",
        "school_admin",
        "room_supervisor",
        "pta_treasurer",
        "store_admin",
      ];

      if (!allowedRoles.includes(role)) {
        return res
          .status(400)
          .json({ error: "Invalid or restricted role assignment" });
      }

      const existing = await User.findOne({ email });
      if (existing)
        return res.status(400).json({ error: "User already exists" });

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({ name, email, password: hashedPassword, role });
      await newUser.save();

      res.status(201).json({ message: "User created", user: newUser });
    } catch (err) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

// 🚨 ONE-TIME SETUP: Create First Superuser (only in dev or controlled environment)
authRoutes.post("/setup-superadmin", async (req, res) => {
  const { name, email, password, role, setupKey } = req.body;

  if (setupKey !== process.env.SETUP_KEY) {
    return res.status(403).json({ error: "Unauthorized setup access" });
  }

  const allowedRoles = ["school_admin", "principal"];
  if (!allowedRoles.includes(role)) {
    return res.status(400).json({ error: "Invalid role for setup" });
  }

  const exists = await User.findOne({ email });
  if (exists) return res.status(400).json({ error: "User already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({ name, email, password: hashedPassword, role });
  await user.save();

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.status(201).json({ message: "Superuser created", user, token });
});

// 🔄 Validate Token
authRoutes.get("/validate", auth, (req, res) => {
  res.status(200).json({ message: "Token is valid", user: req.user });
});

export default authRoutes;

// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MjA5YmM5ZmMwMGEzZmMwNzgyYTE0ZSIsInJvbGUiOiJwcmluY2lwYWwiLCJpYXQiOjE3NDY5Njc0OTcsImV4cCI6MTc0NzA1Mzg5N30.D2E2UeLS6NLdBo9XZspLGTAJ0UZsddYg5Yb_HXizhwU"
