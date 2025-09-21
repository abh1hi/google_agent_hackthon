const express = require('express');
const Destination = require('../models/Destination');
const { protect, admin } = require('../middleware/auth');
const router = express.Router();

// Get all destinations, or filter by name
router.get('/', async (req, res) => {
  try {
    const { name } = req.query;
    let destinations;
    if (name) {
      destinations = await Destination.find({
        $or: [
          { city: { $regex: name, $options: 'i' } },
          { country: { $regex: name, $options: 'i' } }
        ]
      });
    } else {
      destinations = await Destination.find();
    }
    res.json(destinations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add destination (admin)
router.post('/', protect, admin, async (req, res) => {
  try {
    const destination = await Destination.create(req.body);
    res.status(201).json(destination);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
