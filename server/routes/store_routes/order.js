import express from 'express';
import Order from '../../models/store_models/order.js';
import { isAuth, isAdmin } from '../middleware/authMiddleware.js';

const orderRoutes = express.Router();

// ========== CONTROLLERS ==========

// @desc Create a new order
orderRoutes.post('/', isAuth, async (req, res) => {
  try {
    const { cartItems, totalAmount, receiptImage, paymentNarration, userNote, phoneNumber } = req.body;

    // Validate required fields
    if (!cartItems?.length || !receiptImage || !totalAmount || !phoneNumber) {
      return res.status(400).json({ message: 'Missing required fields.' });
    }

    const newOrder = await Order.create({
      user: req.user._id,
      phoneNumber, // Include phone number
      cartItems,
      totalAmount,
      receiptImage,
      paymentNarration,
      userNote,
    });

    res.status(201).json({ message: 'Order submitted.', order: newOrder });
  } catch (err) {
    res.status(500).json({ message: 'Server error.', error: err.message });
  }
});

// @desc Get logged-in user's orders
orderRoutes.get('/my-orders', isAuth, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching your orders.' });
  }
});

// @desc Delete a user’s own order (only if pending)
orderRoutes.delete('/:id', isAuth, async (req, res) => {
  try {
    const order = await Order.findOne({ _id: req.params.id, user: req.user._id });

    if (!order) return res.status(404).json({ message: 'Order not found.' });

    if (order.status !== 'pending') {
      return res.status(400).json({ message: 'Cannot delete approved/rejected orders.' });
    }

    await order.deleteOne();
    res.json({ message: 'Order deleted.' });
  } catch (err) {
    res.status(500).json({ message: 'Server error.' });
  }
});

// @desc Admin: Get all orders
orderRoutes.get('/', isAuth, isAdmin, async (req, res) => {
  try {
    const orders = await Order.find({})
      .populate('user', 'fullName email')
      .sort({ createdAt: -1 });

    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching orders.' });
  }
});

// @desc Admin: Approve order
orderRoutes.patch('/:id/approve', isAuth, isAdmin, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) return res.status(404).json({ message: 'Order not found.' });

    order.status = 'approved';
    order.approval = {
      approvedBy: req.user._id,
      date: new Date(),
    };

    await order.save();
    res.json({ message: 'Order approved.', order });
  } catch (err) {
    res.status(500).json({ message: 'Error approving order.' });
  }
});

// @desc Admin: Reject order
orderRoutes.patch('/:id/reject', isAuth, isAdmin, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) return res.status(404).json({ message: 'Order not found.' });

    order.status = 'rejected';
    order.approval = {
      approvedBy: req.user._id,
      date: new Date(),
    };

    await order.save();
    res.json({ message: 'Order rejected.', order });
  } catch (err) {
    res.status(500).json({ message: 'Error rejecting order.' });
  }
});

export default orderRoutes;
