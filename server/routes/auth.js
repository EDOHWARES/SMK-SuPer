import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import dotenv from 'dotenv';
import { auth } from '../middleware/auth.js';
dotenv.config();

const authRoutes = express.Router();

// Login Route
authRoutes.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ error: 'Invalid email or password' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ error: 'Invalid email or password' });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
  res.json({ token, user });
});

// Signup Route
authRoutes.post('/signup', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ error: 'Email already in use' });

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const user = new User({
      name,
      email,
      password: hashedPassword,
      role,
    });

    await user.save();

    // Generate a token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.status(201).json({ token, user });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Admin Signup Route
authRoutes.post('/admin/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the admin already exists
    const existingAdmin = await User.findOne({ email, role: 'admin' });
    if (existingAdmin) return res.status(400).json({ error: 'Admin already exists' });

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new admin user
    const admin = new User({
      name,
      email,
      password: hashedPassword,
      role: 'admin', // Explicitly set the role to 'admin'
    });

    await admin.save();

    // Generate a token
    const token = jwt.sign({ id: admin._id, role: admin.role }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.status(201).json({ token, admin });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Admin Login Route
authRoutes.post('/admin/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the admin exists
    const admin = await User.findOne({ email, role: 'admin' });
    if (!admin) return res.status(400).json({ error: 'Invalid email or password' });

    // Compare passwords
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid email or password' });

    // Generate a token
    const token = jwt.sign({ id: admin._id, role: admin.role }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.json({ token, admin });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Token Validation Route
authRoutes.get('/validate', auth, (req, res) => {
  // If the token is valid, the `auth` middleware will attach the user to `req.user`
  res.status(200).json({ message: 'Token is valid', user: req.user });
});

export default authRoutes;