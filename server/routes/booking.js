import express from 'express';
import Booking from '../models/Booking.js';
import Room from '../models/Room.js';
import { auth, roleCheck } from '../middleware/auth.js';

const bookingRoutes = express.Router();

// Create a booking (students and teachers)
bookingRoutes.post('/', async (req, res) => {
  try {
    const { roomId, date, timeSlot, attendees, isSpecial } = req.body;
    console.log(roomId, date, timeSlot, attendees, isSpecial);

    // Validate room existence
    const room = await Room.findById(roomId);
    if (!room) return res.status(404).json({ error: 'Room not found' });

    // Validate room capacity
    if (attendees > room.capacity) {
      return res.status(400).json({ error: 'Exceeds room capacity' });
    }

    console.log("working2...")

    // Check for conflicting bookings
    const conflictingBooking = await Booking.findOne({ roomId, date, timeSlot });
    if (conflictingBooking) {
      return res.status(400).json({ error: 'Time slot already booked for this room' });
    }

    // 👇 Using a hardcoded or dummy userId
    const dummyUserId = '6635fc20b4f18f1094cd243e'; // Replace with a real user ID from your DB

    // Create booking with status always set to 'pending'
    const booking = new Booking({
      userId: dummyUserId,
      roomId,
      date,
      timeSlot,
      attendees,
      isSpecial: isSpecial || false,
      status: 'pending', // Always set status to 'pending'
    });

    console.log("working3...", booking)

    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ error: 'Internal server errorr' });
  }
});

// Admin can view all bookings
bookingRoutes.get('/', auth, roleCheck(['admin']), async (req, res) => {
  console.log("working...")
  try {
    const bookings = await Booking.find().populate('userId roomId');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Principal or admin can approve bookings
bookingRoutes.patch('/:id/approve', roleCheck(['admin', 'principal']), async (req, res) => {
  console.log("working...")
  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status: 'approved' },
      { new: true }
    );
    if (!booking) return res.status(404).json({ error: 'Booking not found' });
    res.json(booking);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Principal or admin can reject bookings
bookingRoutes.patch('/:id/reject', roleCheck(['principal', 'admin']), async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status: 'rejected' },
      { new: true }
    );
    if (!booking) return res.status(404).json({ error: 'Booking not found' });
    res.json(booking);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// User can view their own bookings
bookingRoutes.get('/my-bookings', async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user._id }).populate('roomId');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default bookingRoutes;