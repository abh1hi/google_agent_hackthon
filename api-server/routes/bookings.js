const express = require('express');
const Booking = require('../models/Booking');
const Flight = require('../models/Flight');
const { protect } = require('../middleware/auth');
const router = express.Router();

// Create booking
router.post('/', protect, async (req, res) => {
  const { flightId, seats } = req.body;
  try {
    const flight = await Flight.findById(flightId);
    if (!flight || flight.seatsAvailable < seats) {
      return res.status(400).json({ message: 'Not enough seats available' });
    }
    flight.seatsAvailable -= seats;
    await flight.save();
    const booking = await Booking.create({
      user: req.user.id,
      flight: flightId,
      seats,
      totalPrice: flight.price * seats
    });
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get user bookings
router.get('/my', protect, async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id }).populate('flight');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;