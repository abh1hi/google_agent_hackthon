const express = require('express');
const HotelBooking = require('../models/HotelBooking');
const { protect } = require('../middleware/auth');
const router = express.Router();

// Create a new hotel booking
router.post('/', protect, async (req, res) => {
  try {
    const { hotel, checkInDate, checkOutDate, totalPrice } = req.body;
    const hotelBooking = await HotelBooking.create({
      user: req.user._id,
      hotel,
      checkInDate,
      checkOutDate,
      totalPrice,
    });
    res.status(201).json(hotelBooking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
