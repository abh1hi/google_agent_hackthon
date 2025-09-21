const express = require('express');
const Flight = require('../models/Flight');
const Airport = require('../models/Airport');
const { protect, admin } = require('../middleware/auth');
const router = express.Router();

// Get all flights, with optional destination filter
router.get('/', async (req, res) => {
  try {
    const { destination } = req.query;
    let flights;

    if (destination) {
      const airports = await Airport.find({
        $or: [
          { city: { $regex: destination, $options: 'i' } },
          { country: { $regex: destination, $options: 'i' } }
        ]
      });
      const airportIds = airports.map(a => a._id);
      flights = await Flight.find({ to: { $in: airportIds } }).populate('airline from to');
    } else {
      flights = await Flight.find().populate('airline from to');
    }

    res.json(flights);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create flight (admin)
router.post('/', protect, admin, async (req, res) => {
  try {
    const flight = await Flight.create(req.body);
    res.status(201).json(flight);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
