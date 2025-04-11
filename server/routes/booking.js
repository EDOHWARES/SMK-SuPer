import express from 'express';
import Booking from '../models/Booking.js';
import Room from '../models/Room.js';
import { auth, roleCheck } from '../middleware/auth.js';

const bookingRoutes = express.Router();

// Create a booking (students and teachers)
bookingRoutes.post('/', auth, async (req, res) => {
  try {
    const { roomId, date, timeSlot, attendees, isSpecial } = req.body;

    // Validate room existence
    const room = await Room.findById(roomId);
    if (!room) return res.status(404).json({ error: 'Room not found' });

    // Validate room capacity
    if (attendees > room.capacity) {
      return res.status(400).json({ error: 'Exceeds room capacity' });
    }

    // Check for conflicting bookings
    const conflictingBooking = await Booking.findOne({ roomId, date, timeSlot });
    if (conflictingBooking) {
      return res.status(400).json({ error: 'Time slot already booked for this room' });
    }

    // Create booking
    const booking = new Booking({
      userId: req.user._id,
      roomId,
      date,
      timeSlot,
      attendees,
      isSpecial: isSpecial || false,
      status: isSpecial ? 'pending' : 'approved',
    });

    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Admin can view all bookings
bookingRoutes.get('/', auth, roleCheck(['admin']), async (req, res) => {
  try {
    const bookings = await Booking.find().populate('userId roomId');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Principal can approve special bookings
bookingRoutes.patch('/:id/approve', auth, roleCheck(['principal']), async (req, res) => {
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
bookingRoutes.patch('/:id/reject', auth, roleCheck(['principal', 'admin']), async (req, res) => {
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
bookingRoutes.get('/my-bookings', auth, async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user._id }).populate('roomId');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default bookingRoutes;