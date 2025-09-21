const express = require('express');
const Itinerary = require('../models/Itinerary');
const { protect } = require('../middleware/auth');
const router = express.Router();

// Create a new itinerary
router.post('/', protect, async (req, res) => {
  try {
    const { flightBooking, hotelBooking, activities, totalPrice } = req.body;
    const itinerary = await Itinerary.create({
      user: req.user._id,
      flightBooking,
      hotelBooking,
      activities,
      totalPrice,
    });
    res.status(201).json(itinerary);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
